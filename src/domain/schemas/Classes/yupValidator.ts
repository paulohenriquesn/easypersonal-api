import { object, string } from 'yup';

export const createModalitySchema = object({
  name: string().required().min(2),
  color: string().required(),
});
