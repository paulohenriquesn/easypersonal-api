import { MissingParamError, ParamInvalid, SchemaInvalid } from "@errors/index";
import { httpRequest } from "@interfaces/http";
import { validateToken } from "@repositories/user/providers/google/verifyToken";
import { signUp } from ".";

describe('signUp', () => {
  it('throw an error if no email is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        name: 'Paulo Henrique',
        cpf: '869.382.480-52',
        address: 'Rua do Joao N35',
        cellphone: '11999226498',
        google_token: 'token'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('email'))
  }) 

  it('throw an error if no name is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com',
        cpf: '869.382.480-52',
        address: 'Rua do Joao N35',
        cellphone: '11999226498',
        google_token: 'token'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('name'))
  }) 

  it('throw an error if no cpf is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com',
        name: 'Paulo Henrique',
        address: 'Rua do Joao N35',
        cellphone: '11999226498',
        google_token: 'token'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('cpf'))
  }) 

  it('throw an error if no address is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com',
        name: 'Paulo Henrique',
        cpf: '869.382.480-52',
        cellphone: '11999226498',
        google_token: 'token'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('address'))
  }) 

  it('throw an error if no cellphone is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com',
        name: 'Paulo Henrique',
        cpf: '869.382.480-52',
        address: 'Rua do Joao N35',
        google_token: 'token'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('cellphone'))
  }) 

  it('throw an error if schema is invalid',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com',
        name: 'Paulo Henrique',
        cpf: '321.232.356-99',
        address: 'R do Joao N358',
        cellphone: 123,
        google_token: 'token'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new SchemaInvalid())
  }) 

  it('throw an error if cpf is invalid',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com',
        name: 'Paulo Henrique',
        cpf: '321.232.356-99',
        address: 'R do Joao N358',
        cellphone: "99999999",
        google_token: 'token'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new ParamInvalid('cpf'))
  }) 

  it('throw an error if no google_token is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com',
        name: 'Paulo Henrique',
        cpf: '869.382.480-52',
        address: 'R do Joao N358'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('cellphone'))
  }) 

  it('throw an error if no google_token is invalid',async () => {
      expect(await validateToken('teste')).toBe(false)
  }) 

})