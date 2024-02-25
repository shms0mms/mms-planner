import { FC } from "react"
import { IMenuListItem } from "./MenuList"
import Link from "next/link"
import checkActiveLink from "@/utils/check-active-link.utils"
import { AppContext } from "@/context/AppContext"
import useContext from "@/hooks/useContext"
const MenuListItem: FC<IMenuListItem> = ({ icon, id, text, href }) => {
	const { isDecreased } = useContext(AppContext)
	return (
		<>
			<Link
				className={`${
					checkActiveLink(href || "/")
						? "text-yellow opacity-100"
						: "text-white opacity-70"
				} relative hover:opacity-100 ${
					isDecreased ? "text-[0px]" : "text-base gap-2"
				} transition-all duration-300 flex items-center menu-list-item--${id}`}
				href={href || ""}
			>
				<span
					className={`flex transition-all duration-300 items-center justify-start ${
						!isDecreased || "w-full"
					}`}
				>
					{icon}
				</span>{" "}
				<span className={""}>{text}</span>
			</Link>
		</>
	)
}

export default MenuListItem
