import { date, object, string } from 'yup';

export const userSchema = object({
  full_name: string().required().min(2),
  email: string().email().required(),
  google_token: string().required(),
  birthday: date().required(),
});
