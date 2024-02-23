import useDecreased from "@/hooks/useDecreased"
import { FC } from "react"
import MenuList from "./MenuList"
import Logo from "../ui/Logo"

const SideBar: FC = ({}) => {
	const isDecreased = useDecreased()

	return (
		<>
			<div
				className={`flex flex-col gap-6 p-4 ${
					isDecreased ? "min-w-[40px]" : "min-w-[120px]"
				} border-[0px] border-r-[1px] border-solid border-r-[#292929] h-full`}
			>
				<Logo />
				<MenuList />
			</div>
		</>
	)
}

export default SideBar
