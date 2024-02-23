import { routes } from "@/constants/routes.constants"
import { Home, MessageCircle, Timer } from "lucide-react"
import { FC, ReactNode } from "react"
import MenuListItem from "./MenuListItem"
import useContext from "@/hooks/useContext"
import { AppContext } from "@/context/AppContext"
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
