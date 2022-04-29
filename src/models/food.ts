import { AutoIncrement, Column, CreatedAt, DeletedAt, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Optional } from "sequelize/types";

interface FoodAttributes {
    id: number;
    name: string;
    description: string;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type FoodInput = Optional<FoodAttributes, "id">;
export type FoodOutput = FoodAttributes;

@Table({ tableName: "food" })
export default class Food extends Model<FoodAttributes, FoodInput> implements FoodAttributes {
    @AutoIncrement
    @PrimaryKey
    @Column({ field: "food_id" })
    id!: number;

    @Column({ field: "food_name" })
    name!: string;

    @Column({ field: "food_desc" })
    description!: string;

    @Column({ field: "food_price" })
    price!: number;

    @CreatedAt
    @Column({ field: "created_at" })
    createdAt!: Date;

    @UpdatedAt
    @Column({ field: "updated_at" })
    updatedAt!: Date;

    @DeletedAt
    @Column({ field: "deleted_at" })
    deletedAt!: Date;
}
