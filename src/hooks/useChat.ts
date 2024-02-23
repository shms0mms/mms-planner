import { IMessage } from "@/interfaces/messages.interface"
import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const socket = io("ws://localhost:3000/chat")
const useChat = () => {
	const [messages, setMessages] = useState<IMessage[]>([])
	useEffect(() => {
		socket.on("chat", msg => {
			setMessages(prev => [...prev, msg])
		})

		return () => {
			socket.disconnect()
		}
	}, [])

	const handleInputChange = e => {
		setInputValue(e.target.value)
	}

	const sendMessage = () => {
		if (inputValue.trim() !== "") {
			socket.emit("chat message", inputValue)
			setInputValue("")
		}
	}
	return {}
}

export default useChat
