import * as dotenv from "dotenv";

dotenv.config();

// App
export const APP_NAME = process.env.APP_NAME;
export const APP_ENV = process.env.APP_ENV;
export const APP_VERSION = process.env.APP_VERSION;

// Server
export const HTTP_PORT = process.env.HTTP_PORT || 8080;
export const HTTP_CORS = process.env.HTTP_CORS;
export const HTTP_CORS_METHODS = process.env.HTTP_CORS_METHODS;

// Database
export const DB_HOST = process.env.DB_HOST;

// Jwt
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_AT_EXPIRED = process.env.JWT_AT_EXPIRED;
export const JWT_RT_EXPIRED = process.env.JWT_RT_EXPIRED;

// AI
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Redis
export const REDIS_HOST = process.env.REDIS_HOST;
export const REDIS_PORT = process.env.REDIS_PORT;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
