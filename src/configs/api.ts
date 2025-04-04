//import { REACT_APP_BASE_API, } from '@env'
import axios from 'axios'

export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
}); 