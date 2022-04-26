import { StatusCodes } from 'http-status-codes';

/**
 * Send any success response.
 *
 * @param {string} message
 * @param {object | array} results
 * @param statusCode
 * @returns Returns a JSON object
 */
export const success = (message: string, results: object | [], statusCode: number) => {
    if (message) {
        return {
            response: {
                status: 'success',
                result: {
                    message,
                },
            },
        };
    }

    return {
        response: {
            status: 'success',
            result: {
                data: results,
            },
        },
        code: statusCode,
    };
};

/**
 * Send any error response.
 *
 * @param message
 * @param statusCode
 * @returns Returns a JSON object
 */
export const error = (message: string, statusCode: number) => {
    const commonCodes = [
        StatusCodes.OK,
        StatusCodes.CREATED,
        StatusCodes.BAD_REQUEST,
        StatusCodes.UNAUTHORIZED,
        StatusCodes.FORBIDDEN,
        StatusCodes.NOT_FOUND,
        StatusCodes.UNPROCESSABLE_ENTITY,
        StatusCodes.INTERNAL_SERVER_ERROR,
    ];

    const findCode = commonCodes.find((code) => code === statusCode);

    statusCode = findCode ? findCode : StatusCodes.INTERNAL_SERVER_ERROR;
    return {
        response: {
            status: 'error',
            result: {
                message,
            },
        },
        code: statusCode,
    };
};

/**
 * Send any validation response.
 *
 * @param errors
 * @returns Returns a JSON object
 */
export const validation = (errors: object | []) => {
    console.log(errors);
    return {
        response: {
            status: 'error',
            result: {
                message: 'Validation errors',
            },
        },
        code: StatusCodes.UNPROCESSABLE_ENTITY,
    };
};
