export {};

/**
 * Add more properties to Request object here.
 */
declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}
