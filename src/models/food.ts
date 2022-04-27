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

@Table({
    timestamps: true,
    paranoid: true,
})
class Food extends Model<FoodAttributes, FoodInput> implements FoodAttributes {
    @AutoIncrement
    @PrimaryKey
    @Column
    id!: number;

    @Column
    name!: string;

    @Column
    description!: string;

    @Column
    price!: number;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @DeletedAt
    deletedAt!: Date;
}

export default Food;
