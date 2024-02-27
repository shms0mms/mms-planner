import axios from "axios"
import { InstanseService } from "./instanse.service"

class TodoService extends InstanseService {
	async getAll() {
		const response = await this.instance.get("/todo/all")

		return response
	}
}
export default new TodoService()
