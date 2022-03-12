import { MissingParamError } from "@errors/MissingParamError";
import { httpRequest } from "@interfaces/http";
import { signUp } from ".";

describe('signUp', () => {
  it('should throw an error if no email is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        name: 'Paulo Henrique'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('email'))
  }) 

  it('should throw an error if no name is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('name'))
  }) 

  it('should throw an error if no cpf is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com',
        name: 'Paulo Henrique',
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('cpf'))
  }) 

  it('should throw an error if no address is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com',
        name: 'Paulo Henrique',
        cpf: '321.232.356-99'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('address'))
  }) 

  it('should throw an error if no cellphone is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com',
        name: 'Paulo Henrique',
        cpf: '321.232.356-99',
        address: 'R do Joao N358'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('cellphone'))
  }) 

})