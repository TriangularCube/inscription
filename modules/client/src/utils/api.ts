import { apiURL } from '../env'

interface OkayResponse<T> {
  success: true
  data: T
}

interface ErrorResponse {
  success: false
  error: {
    code: string
    message?: string
  }
}

type APIResponse<T> = OkayResponse<T> | ErrorResponse

const sendRequest = async <T>(
  address: string,
  args: Partial<RequestInit>
): Promise<APIResponse<T>> => {
  const url = new URL(address, apiURL)

  try {
    const result = await fetch(url, {
      ...args,
      credentials: 'same-origin',
    })

    if (!result.ok) {
      return {
        success: false,
        error: await result.json(),
      }
    }

    return {
      success: true,
      data: await result.json(),
    }
  } catch (error) {
    console.error(error)

    return {
      success: false,
      error: {
        code: 'Fetch Error',
      },
    }
  }
}

export const GetRequest = <T>(
  address: string,
  args: Omit<Partial<RequestInit>, 'method'> = {}
) => {
  const { headers, ...rest } = args

  return sendRequest<T>(address, {
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
    ...rest,
  })
}

export const PostRequest = <T>(
  address: string,
  args: Omit<Partial<RequestInit>, 'method'> = {}
) => {
  const { headers, ...rest } = args

  return sendRequest<T>(address, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
    ...rest,
  })
}
