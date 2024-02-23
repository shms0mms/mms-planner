"use client"
import AppProvider from "@/context/AppContext"
import { FC, PropsWithChildren } from "react"
import SideBar from "../sidebar/SideBar"
import MessagesBar from "../messagesbar/MessagesBar"

const BaseLayout: FC<
	PropsWithChildren<{ withSB?: boolean; withMB?: boolean }>
> = ({ children, withSB, withMB }) => {
	return (
		<>
			<AppProvider>
				<div className={`h-full ${!withSB || "flex items-start"}`}>
					{!withSB || <SideBar />}
					{!withMB || <MessagesBar />}
					{children}
				</div>
			</AppProvider>
		</>
	)
}

export default BaseLayout
