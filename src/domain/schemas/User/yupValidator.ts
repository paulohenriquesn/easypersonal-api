import { object, string } from 'yup';

export const userSchema = object({
  email: string().email().required(),
  name: string().required().min(4),
  google_token: string().required(),
  cpf: string().strict().required(),
  address: string().required(),
  cellphone: string().strict().required(),
})