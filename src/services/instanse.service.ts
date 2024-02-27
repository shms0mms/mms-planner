import axios from "axios"

const base = axios.create({
	baseURL: process.env.API_URL ?? "http://localhost:8080/api",
})

export class InstanseService {
	instance = base
}
