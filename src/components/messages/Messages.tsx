import { AppContext } from "@/context/AppContext"
import useChat from "@/hooks/useChat"
import useContext from "@/hooks/useContext"
import { FC, useEffect } from "react"
const Messages: FC = ({}) => {
	const { isDecreased, setIsDecreased } = useContext(AppContext)
	useEffect(() => {
		setIsDecreased(true)
	}, [!isDecreased])
	const {} = useChat()
	return (
		<>
			<div>Messages </div>
		</>
	)
}

export default Messages
