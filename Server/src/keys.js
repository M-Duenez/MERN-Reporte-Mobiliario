import dotenv from 'dotenv'
dotenv.config()

export const  database = {
        host:  process.env.HOST,
        user:  process.env.USER,
        password:  process.env.PASSWORD,
        database: process.env.DB,
        port:  process.env.PORTDB

    }
export const PORT = process.env.PORT || 8000