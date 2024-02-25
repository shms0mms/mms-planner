"use client"
import useTodo from "@/hooks/useTodo"
export default function TodosScreen() {
	const { getAll } = useTodo()
	const response = getAll()
	console.log(response.data)

	return <></>
}
