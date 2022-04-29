import { DataTypes, Optional } from "sequelize";
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
} from "sequelize-typescript";

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

export type UserInput = Optional<UserAttributes, "id" | "address">;
export type UserOutput = UserAttributes;

@Table({ tableName: "user" })
export default class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    @PrimaryKey
    @Default(DataTypes.UUIDV4)
    @Column({ field: "user_id" })
    id!: string;

    @Column({ field: "user_first_name" })
    firstName!: string;

    @Column({ field: "user_last_name" })
    lastName!: string;

    @Column({ field: "user_email" })
    email!: string;

    @Column({ field: "user_phone_number" })
    phoneNumber!: string;

    @Column({ field: "user_password" })
    password!: string;

    @AllowNull
    @Column({ field: "user_address" })
    address?: string;

    @CreatedAt
    @Column({ field: "created_at" })
    createdAt?: Date;

    @UpdatedAt
    @Column({ field: "updated_at" })
    updatedAt?: Date;

    @DeletedAt
    @Column({ field: "deleted_at" })
    deletedAt?: Date;
}
