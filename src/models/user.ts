import { DataTypes, Optional } from 'sequelize';
import {
    Model,
    Column,
    CreatedAt,
    DeletedAt,
    PrimaryKey,
    Table,
    UpdatedAt,
    Default,
    AllowNull,
} from 'sequelize-typescript';

interface UserAttributes {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    address?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type UserInput = Optional<UserAttributes, 'id' | 'address'>;
export type UserOutput = UserAttributes;

@Table({
    timestamps: true,
    paranoid: true,
})
class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    @PrimaryKey
    @Default(DataTypes.UUIDV4)
    @Column
    id!: string;

    @Column
    firstName!: string;

    @Column
    lastName!: string;

    @Column
    email!: string;

    @Column
    phoneNumber!: string;

    @Column
    password!: string;

    @AllowNull
    @Column
    address?: string;

    @CreatedAt
    createdAt?: Date | undefined;

    @UpdatedAt
    updatedAt?: Date | undefined;

    @DeletedAt
    deletedAt?: Date | undefined;
}

export default User;
