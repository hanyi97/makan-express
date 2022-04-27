import bcrypt from "bcrypt";
import User, { UserInput, UserOutput } from "../models/user";

/**
 * Hashes the password and creates a new user.
 *
 * @param user New user to be created.
 * @returns Promise<UserOutput> Promise that resolves to the newly created user.
 */
export const create = async (user: UserInput): Promise<UserOutput> => {
    const foundUser = await User.findOne({ where: { email: user.email } });
    if (foundUser) {
        throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    return await User.create(user);
};

/**
 * Retrieves all users.
 *
 * @returns Promise<UserOutput[]> Promise that resolves to an array of all users.
 */
export const getAll = async (): Promise<UserOutput[]> => {
    return await User.findAll({ attributes: { exclude: ["password"] } });
};

/**
 * Retrieve a user by their id.
 *
 * @param id Id of the user to be retrieved.
 * @returns Promise<UserOutput> Promise that resolves to the user with the given id.
 */
export const getById = async (id: string): Promise<UserOutput> => {
    const user = await User.findByPk(id, { attributes: { exclude: ["password"] } });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

/**
 * Updates a user.
 *
 * @param id Id of the user to be updated.
 * @param updateUser User object containing the fields to be updated.
 * @returns Promise<UserOutput> Promise that resolves to the updated user.
 */
export const update = async (id: string, updateUser: UserInput): Promise<UserOutput> => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error("User not found");
    }
    return await user.update(updateUser);
};

/**
 * Deletes a user.
 *
 *
 * @param id Id of the user to be deleted.
 * @returns Promise<UserOutput> Promise that resolves to true if the user was deleted, false if the user was not found.
 */
export const deleteById = async (id: string): Promise<boolean> => {
    const deletedUserCount = await User.destroy({
        where: { id },
    });
    return deletedUserCount === 1;
};
