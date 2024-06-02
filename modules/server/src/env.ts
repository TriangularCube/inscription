import env from 'env-var'

export const port = env.get('PORT').required().asPortNumber()
