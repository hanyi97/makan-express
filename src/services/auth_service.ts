import { LoginDTO } from '../dtos/login_dto';
import User from '../models/user';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt';

export const login = async (login: LoginDTO): Promise<string> => {
    const user = await User.findOne({ where: { email: login.email } });
    console.log(JSON.stringify(user));
    if (!user) {
        throw new Error('Invalid credentials!');
    }

    const isValid = await bcrypt.compare(login.password, user.password);
    if (!isValid) {
        throw new Error('Invalid credentials!');
    }

    return generateToken(user);
};
