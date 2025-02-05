import { apiURL } from '~/env.ts'

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
  path: string,
  args: Partial<RequestInit>
): Promise<APIResponse<T>> => {
  const url = new URL(path, apiURL)

  try {
    const result = await fetch(url, {
      ...args,
      // credentials: 'same-origin',
    })

    if (!result.ok) {
      return (await result.json()) as ErrorResponse
    }

    return {
      success: true,
      data: (await result.json()) as T,
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

export const GetRequest = async <T>(
  path: string,
  args: Omit<Partial<RequestInit>, 'method'> = {}
): Promise<APIResponse<T>> => {
  const { headers, ...rest } = args

  return sendRequest<T>(path, {
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
