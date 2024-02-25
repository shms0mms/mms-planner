"use client"
import AppProvider from "@/context/AppContext"
import { FC, PropsWithChildren } from "react"
import SideBar from "../sidebar/SideBar"
import MessagesBar from "../messagesbar/MessagesBar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
const BaseLayout: FC<
	PropsWithChildren<{ withSB?: boolean; withMB?: boolean }>
> = ({ children, withSB, withMB }) => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AppProvider>
					<div className={`h-full ${!withSB || "flex items-start"}`}>
						{!withSB || <SideBar />}
						{!withMB || <MessagesBar />}
						{children}
					</div>
				</AppProvider>
			</QueryClientProvider>
		</>
	)
}

export default BaseLayout
