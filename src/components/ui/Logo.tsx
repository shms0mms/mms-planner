import { routes } from "@/constants/routes.constants"
import { AppContext } from "@/context/AppContext"
import useContext from "@/hooks/useContext"
import { Backpack } from "lucide-react"
import Link from "next/link"
import { FC } from "react"

const Logo: FC = ({}) => {
	const { isDecreased } = useContext(AppContext)
	const size = 30
	return (
		<>
			<Link
				href={routes.home}
				className={`flex items-center text-white font-bold  `}
			>
				<span
					className={`inline-flex items-center ${
						isDecreased ? "gap-0" : "gap-2"
					} after:content-[''] after:absolute after:-right-1 after:top-0 after:animate-bounce after:w-2 after:h-2 after:rounded-[51%] after:bg-[#969696] relative`}
				>
					<span
						className={`flex transition-all duration-300 items-center justify-start ${
							!isDecreased || "w-full"
						}`}
					>
						<Backpack width={size} height={size} />
					</span>
					<span
						className={`transition-all duration-300 ${
							isDecreased ? "text-[0px]" : "text-xl "
						}`}
					>
						m<span className="text-yellow">m</span>s-pl
						<span className="text-yellow">a</span>nner
					</span>
				</span>
			</Link>
		</>
	)
}

export default Logo
