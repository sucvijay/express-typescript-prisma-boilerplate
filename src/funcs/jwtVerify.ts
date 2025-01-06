import { SignJWT, jwtVerify } from 'jose';
import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import crypto from 'crypto';

dotenv.config();

const ISSUER = process.env.ISSUER as string;
const AUDIENCE = process.env.AUDIENCE as string;
const JWT_SECRET: string = process.env.JWT_SECRET || "";

// Convert the secret to Uint8Array
const secret = new TextEncoder().encode(JWT_SECRET);

export const validateJWT = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('FR ')) {
      res.status(401).json({ error: 'Authorization header missing or malformed' });
      return;
    }

    const token = authHeader.split(' ')[1];

    // Verify the token using jose
    const { payload } = await jwtVerify(token, secret, {
      issuer: ISSUER,
      audience: AUDIENCE,
    });

    // Attach the payload to the request object
    req.user = payload;

    next();
  } catch (err: any) {
    console.error('JWT validation error:', err.message);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

export const createJWT = async (data: any) => {
  const jwt = await new SignJWT(data)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .setExpirationTime('2h')
    .sign(secret);

  return jwt;
};

// Helper function to generate a secure secret key if needed
export const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('base64url');
};