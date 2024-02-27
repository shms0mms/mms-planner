import { ITodo } from "@/interfaces/todo.interface"
import { FC } from "react"

const Todo: FC<ITodo> = ({ id, isCompleted, name }) => {
	return <>{name}</>
}

export default Todo
