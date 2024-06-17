import dotenv from "dotenv"

dotenv.config()

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined
            CONSUMET_API_URL: string
        }
    }
}