import dotenv from "dotenv";

dotenv.config();
export default{
    PORT:process.env.port|| 3000
};