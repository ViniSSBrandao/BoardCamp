import pg from "pg";
import dotenv, { config } from "dotenv";

dotenv.config();

const {pool} = pg;

const configDatabase ={
    connectionString: process.env.DATABASE_URL
}

if(process.env.MODE === 'prod') config.database.ssl = true;

export const db = new pool(configDatabase)