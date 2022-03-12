import { MissingParamError, ParamInvalid, SchemaInvalid } from "@errors/index";
import { httpRequest } from "@interfaces/http";
import { signUp } from ".";

describe('signUp', () => {
  it('throw an error if no email is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        name: 'Paulo Henrique'
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('email'))
  }) 

  it('throw an error if no name is provided',async () => {
    const response = await signUp(<httpRequest> {
      body: {
        email: 'paulo@blocksrvt.com'
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
        cpf: '321.232.356-99'
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
        cpf: '321.232.356-99',
        address: 'R do Joao N358'
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
        cellphone: 123
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
        cellphone: "99999999"
      }
    });
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new ParamInvalid('cpf'))
  }) 

})