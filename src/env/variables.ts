import dotenv from 'dotenv';

dotenv.config();

type NODE_ENV_VALUES = "development" | "production";

export const NODE_ENV = (process.env.NODE_ENV as NODE_ENV_VALUES) || "development";
export const __production__ = NODE_ENV === "production";

export const API_PORT = parseInt(process.env.API_PORT as string) || 5000;
export const API_BASE_URL = process.env.API_BASE_URL || '/api/v1/';

export const DB_DIALECT = process.env.DB_DIALECT || 'mysql';
export const DB_NAME = process.env.DB_NAME || 'skilltree_dev';
export const DB_USERNAME = process.env.DB_USERNAME || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = parseInt(process.env.DB_PORT as string) || 3306;
