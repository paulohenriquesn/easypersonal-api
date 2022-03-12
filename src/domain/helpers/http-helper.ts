import { httpResponse } from "@interfaces/http"

export const badRequest = (error: Error) : httpResponse => ({
    statusCode: 400,
    body: error
})
