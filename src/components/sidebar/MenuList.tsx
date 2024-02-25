import { routes } from "@/constants/routes.constants"
import { Book, Home, MessageCircle, Timer, User } from "lucide-react"
import { FC, ReactNode } from "react"
import MenuListItem from "./MenuListItem"
import { AppContext } from "@/context/AppContext"
import useContext from "@/hooks/useContext"
export interface IMenuListItem {
	href?: string
	icon: ReactNode
	text: string
	id: number
}
const MenuList: FC = ({}) => {
	const { isDecreased } = useContext(AppContext)
	const size = isDecreased ? 30 : 24
	const items = [
		{
			id: 1,
			icon: <Home width={size} height={size} />,
			text: "Главная",
			href: routes.home,
		},
		{
			id: 2,
			icon: <Timer width={size} height={size} />,
			text: "Последнее задание",
			href: routes["last-task"],
		},
		{
			id: 3,
			icon: <MessageCircle width={size} height={size} />,
			text: "Переписки",
			href: routes.messages,
		},
		{
			id: 4,
			icon: <User width={size} height={size} />,
			text: "Регистрация",
			href: routes.register,
		},
		{
			id: 5,
			icon: <Book width={size} height={size} />,
			text: "Задачи",
			href: routes.tasks,
		},
	] as IMenuListItem[]
	return (
		<>
			<div className="flex flex-col gap-6">
				{items.map(i => (
					<MenuListItem {...i} key={i.id} />
				))}
			</div>
		</>
	)
}

export default MenuList
