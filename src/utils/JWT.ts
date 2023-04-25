import jwt from 'jsonwebtoken';
import { IPayload } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const generateToken = (payload: IPayload) => 
  jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' })

export default generateToken;