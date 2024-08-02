import sqlite, { Database } from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'
import {
  InscriptionGameCreateData,
  InscriptionGameStorageData,
  Store,
} from './storageTypes.js'
import ShortUniqueId from 'short-unique-id'
import { DateTime } from 'luxon'

const generateID = new ShortUniqueId()

export class SQLiteStore implements Store {
  private instance: Database

  constructor(storeDirectory: string) {
    if (!fs.existsSync(storeDirectory)) {
      fs.mkdirSync(storeDirectory, { recursive: true })
    }

    this.instance = new sqlite(path.join(storeDirectory, 'inscription.db'))
    this.instance.pragma('journal_mode = WAL')

    const tableStmt = this.instance.prepare(
      `CREATE TABLE IF NOT EXISTS games (
          game_id text not null primary key,
          last_updated_time integer,
          content JSON
        )`
    )

    tableStmt.run()
  }

  createGame(content: InscriptionGameCreateData) {
    const stmt = this.instance.prepare(
      `INSERT INTO games (game_id, last_updated_time, content)
              VALUES (?, ?, json(?))`
    )

    try {
      const id = generateID.stamp(10)

      console.log('id', id)

      stmt.run(id, DateTime.now().toSeconds(), JSON.stringify(content))

      return id
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  getGame(id: string): InscriptionGameStorageData {
    const stmt = this.instance.prepare(
      `select last_updated_time, content from games where game_id = ?`
    )

    const result: InscriptionGameStorageData | undefined = stmt.get(id) as
      | InscriptionGameStorageData
      | undefined

    if (result == null) {
      throw new Error('No Game Found', {
        cause: {
          code: 'GAME_NOT_FOUND',
        },
      })
    }

    return {
      id: id,
      content: result.content,
    }
  }
}
