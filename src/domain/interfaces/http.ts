export interface httpResponse {
  statusCode: number,
  message?: string,
  body: any
}

export interface httpRequest {
  body: any
}