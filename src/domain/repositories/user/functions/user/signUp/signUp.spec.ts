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

  it('should throw an error if no name is passed',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('name'))
  }) 

  it('should throw an error if no cpf is passed',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com',
        name: 'Paulo Henrique',
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('cpf'))
  }) 

})