import { MissingParamError, SchemaInvalid } from "@errors/index";
import { badRequest } from "@helpers/http-helper";
import { httpResponse } from "@interfaces/http";
import { userSchema } from "@schemas/User/yupValidator";

export async function signUp(request) : Promise<httpResponse> {
  const requiredFields = [
    "email",
    "name",
    "cpf",
    "address",
    "cellphone"
  ];

  for(const field of requiredFields) {
    if(request.body[field] === undefined) {
      return badRequest(new MissingParamError(field))
    }
  }
  
  if(!userSchema.isValidSync(request.body)) {
    return badRequest(new SchemaInvalid())
  }

  return <httpResponse>{
    statusCode: 200,
  }
} 