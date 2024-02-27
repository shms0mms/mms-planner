import { Loader2Icon } from "lucide-react"
import { FC } from "react"

export interface ILoader {
	size?: number
}

const Loader: FC<ILoader> = ({ size }) => {
	return (
		<>
			<div className="animate-spin w-full h-full flex items-center justify-center">
				<Loader2Icon width={size ?? 16} height={size ?? 16} />
			</div>
		</>
	)
}

export default Loader
