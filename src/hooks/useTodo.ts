import { keys } from "@/constants/keys.constants"
import { ITodo } from "@/interfaces/todo.interface"
import todoService from "@/services/todo.service"
import { useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

const useTodo = () => {
	const getAll = () => {
		return useQuery<AxiosResponse<ITodo[]>, undefined, AxiosResponse<ITodo[]>>({
			queryKey: [keys.todos],
			queryFn: () => todoService.getAll(),
		})
	}
	return { getAll }
}

export default useTodo
