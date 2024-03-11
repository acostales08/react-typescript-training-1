import axios from 'axios'

export class Api {
    connect(){
        const baseUrl = "https://jsonplaceholder.typicode.com"
        const instance = axios.create({
            baseURL: baseUrl,
            headers: {
                "Content-Type" : "application/json"
            }
        }) 
        return instance
    }
}