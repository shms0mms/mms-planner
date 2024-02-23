import { IMessage } from "@/interfaces/messages.interface"
import { ChangeEvent, useEffect, useState } from "react"
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

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {}

	const sendMessage = () => {
		if ("".trim() !== "") {
			socket.emit("chat message", "")
		}
	}
	return {}
}

export default useChat
