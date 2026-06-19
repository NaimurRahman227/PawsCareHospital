import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { env } from "./config/env.js";
import dns from 'node:dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();

const PORT = env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server Running On ${PORT}`);
  });
};

startServer();