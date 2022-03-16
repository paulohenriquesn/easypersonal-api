import { sign } from 'jsonwebtoken';

interface UserData {
  id: string;
  email: string;
  student: boolean;
}

export async function generateUserToken(userData: UserData) {
  const token = sign(
    {
      userId: userData.id,
      userEmail: userData.email,
      userIsStudent: userData.student,
    },
    process.env.JWT_SECRET,
    { expiresIn: '720h' },
  );
  return token;
}
