import { AppContext } from "@/context/AppContext"
import useContext from "@/hooks/useContext"
import { FC, useEffect } from "react"

const Messages: FC = ({}) => {
	const { isDecreased, setIsDecreased } = useContext(AppContext)
	useEffect(() => {
		setIsDecreased(true)
	}, [!isDecreased])
	return <></>
}

export default Messages
