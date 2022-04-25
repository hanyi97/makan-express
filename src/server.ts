import cookieParser from 'cookie-parser';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from './configs/middlware/error';
import { notFoundHandler } from './configs/middlware/not_found';
import router from './routes/routes';

const server: Application = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(helmet());
server.use(morgan('tiny'));

server.get('/', (req: Request, res: Response) => res.send('Server running...'));

server.use('/api', router);
server.use(errorHandler);
server.use(notFoundHandler);

export { server };
