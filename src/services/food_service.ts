import Food, { FoodInput, FoodOutput } from '../models/food';

/**
 * Creates a new food.
 *
 * @param food Food object to be created.
 * @returns Promise<FoodOutput> Promise that resolves to the newly created food.
 */
export const create = async (food: FoodInput): Promise<FoodOutput> => {
    return await Food.create(food);
};

/**
 * Retrieve all food.
 *
 * @returns Promise<FoodOutput[]> Promise that resolves to an array of all foods.
 */
export const getAll = async (): Promise<FoodOutput[]> => {
    return await Food.findAll();
};

/**
 * Retrieve a food by their id.
 *
 * @param id Id of the food to be retrieved.
 * @returns Promise<FoodOutput> Promise that resolves to the food with the given id.
 */
export const getById = async (id: number): Promise<FoodOutput> => {
    const food = await Food.findByPk(id);
    if (!food) {
        throw new Error('Food not found');
    }
    return food;
};

/**
 * Updates a food.
 *
 * @param id Id of the food to be updated.
 * @param updateFood Food object containing the fields to be updated.
 * @returns Promise<FoodOutput> Promise that resolves to the updated food.
 */
export const update = async (id: number, updateFood: FoodInput): Promise<FoodOutput> => {
    const food = await Food.findByPk(id);
    if (!food) {
        throw new Error('Food not found');
    }
    return await food.update(updateFood);
};

/**
 * Deletes a food.
 *
 * @param id Id of the food to be deleted.
 * @returns Promise<boolean> Promise that resolves to true if the food was deleted, false if the food was not found.
 */
export const deleteById = async (id: number): Promise<boolean> => {
    const deletedFoodCount = await Food.destroy({
        where: { id },
    });
    return deletedFoodCount === 1;
};
