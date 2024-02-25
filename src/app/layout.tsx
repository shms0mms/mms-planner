import type { Metadata } from "next"
import "../styles/globals.scss"
import { inter } from "@/styles/fonts"
import ReactQueryProvider from "@/context/ReactQueryProvider"

export const metadata: Metadata = {
	title: "mms planner",
	description: "plan your days with greater comfort",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ReactQueryProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</ReactQueryProvider>
	)
}
