import React, { ReactElement, useEffect } from 'react'
import { GetRequest } from 'Utils/api'
import { useParams } from 'react-router-dom'

export function Details(): ReactElement {
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    GetRequest(`/details/${id}`).then(res => {
      console.log(res)
    })
  }, [])

  return <div>Detail</div>
}
