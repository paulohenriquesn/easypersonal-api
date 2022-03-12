import { MissingParamError } from "@errors/MissingParamError";
import { badRequest } from "@helpers/http-helper";
import { httpResponse } from "@interfaces/http";

export async function signUp(request) : Promise<httpResponse> {
  const requiredFields = [
    "email",
    "name",
  ];

  for(const field of requiredFields) {
    if(request.body[field] === undefined) {
      return badRequest(new MissingParamError(field))
    }
  }

  return <httpResponse>{
    statusCode: 200,
    message: 'ok',
    body: {}
  }
} 