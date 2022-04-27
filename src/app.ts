// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({ path: __dirname + "/../.env" });
import { dbInit } from "./configs/connection/db_init";
import { server } from "./server";

dbInit();

const PORT = Number(process.env.PORT) || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
