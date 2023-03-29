import { config } from "dotenv";

config()

export const LISTEN_PORT = process.env.LISTEN_PORT || 3000
export const DB_URI = process.env.DB_URI