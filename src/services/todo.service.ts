import axios from "axios"

class TodoService {
	async getAll() {
		const response = await axios.get("http://localhost:8080/api/todo/all")

		return response
	}
}
export default new TodoService()
