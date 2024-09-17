import axios from "axios";
import { urlServer } from "../constants";



export const configInstance = axios.create({
    baseURL: urlServer,
    timeout: 4000,
})