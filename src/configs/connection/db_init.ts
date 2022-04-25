import db from './db';

const dbInit = () => {
    db.sync();
};

export { dbInit };
