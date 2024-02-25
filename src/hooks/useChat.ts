import { IMessage } from "@/interfaces/messages.interface"
import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const socket = io("ws://localhost:8080/chat")
const useChat = () => {
	const [messages, setMessages] = useState<IMessage[]>([])
	useEffect(() => {
		socket.on("chat", msg => {
			console.log(socket.connected)

			setMessages(prev => [...prev, msg])
		})

		console.log(socket)

		return () => {
			socket.disconnect()
		}
	}, [])

	const sendMessage = (value: string) => {
		if (value.trim() !== "") {
			socket.emit("chat", "")
		}
	}
	return {}
}

export default useChat
