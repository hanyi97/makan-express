import { sign, SignOptions, verify } from 'jsonwebtoken';
import { UserOutput } from '../models/user';
import { TokenDTO } from '../dtos/token_dto';

/**
 * Generates a JWT token for the given user.
 *
 * 1. Pass the userId to the payload.
 * 2. Pass the secret to sign the token.
 * 3. Pass the options to sign the token.
 *
 * @param user User object.
 * @returns Promise<TokenDTO> Promise that resolves to the signed token.
 */
export const generateToken = (user: UserOutput): string => {
    const payload = {
        userId: user.id,
    };

    const privateKey = process.env.JWT_SECRET_KEY;
    if (!privateKey) {
        throw new Error('JWT secret is not defined');
    }

    const signInOptions: SignOptions = {
        expiresIn: '1d',
    };

    return sign(payload, privateKey, signInOptions);
};

/**
 * Validates a JWT token.
 *
 * @param token JWT token to verify.
 * @returns Promise<TokenDTO> Promise that resolves to the decoded token.
 */
export const validateToken = async (token: string): Promise<TokenDTO> => {
    const publicKey = process.env.JWT_SECRET_KEY;
    if (!publicKey) {
        throw new Error('JWT public key is not defined');
    }

    return verify(token, publicKey) as TokenDTO;
};
