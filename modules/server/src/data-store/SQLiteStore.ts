import sqlite, { Database } from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'
import { InscriptionStorageState, Store } from '../utils/types/Storage'

export class SQLiteStore implements Store {
  private instance: Database

  constructor(storeDirectory: string) {
    if (!fs.existsSync(storeDirectory)) {
      fs.mkdirSync(storeDirectory, { recursive: true })
    }

    this.instance = new sqlite(path.join(storeDirectory, 'inscription.db'))

    const tableStmt = this.instance.prepare(
      `CREATE TABLE IF NOT EXISTS games (
          game_id text not null primary key,
          last_updated_time integer,
          content JSON
        )`
    )

    tableStmt.run()
  }

  createGame(state: InscriptionStorageState) {
    const stmt = this.instance.prepare(
      `INSERT INTO games (game_id, last_updated_time, content)
              VALUES (?, ?, json(?))`
    )

    let id: string
    let completed = false

    do {

    } while (!completed)

    return ''
  }
}
