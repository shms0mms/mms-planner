"use client"

import useTodo from "@/hooks/useTodo"
import { useEffect } from "react"

export default function TodosScreen() {
	const { getAll } = useTodo()
	useEffect(() => {
		const response = getAll()
		console.log(response)
	}, [])

	return <></>
}
