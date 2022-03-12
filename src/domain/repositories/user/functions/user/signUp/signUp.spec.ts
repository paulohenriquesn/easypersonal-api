import { MissingParamError } from "@errors/MissingParamError";
import { httpRequest } from "@interfaces/http";
import { signUp } from ".";

describe('signUp', () => {
  it('should throw an error if no email is passed',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        name: 'Paulo Henrique'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('email'))
  }) 
})