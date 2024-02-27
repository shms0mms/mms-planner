"use client"
import useTodo from "@/hooks/useTodo"
import BaseLayout from "../base-layout/BaseLayout"
import Todo from "../ui/Todo"
import Loader from "../ui/Loader"
export default function TodosScreen() {
	const { getAll } = useTodo()
	const { data } = getAll()
	return (
		<>
			<BaseLayout withSB>
				<div>
					{data?.data?.length ? (
						data.data?.map(t => <Todo {...t} key={t.id} />)
					) : (
						<Loader />
					)}
				</div>
			</BaseLayout>
		</>
	)
}
