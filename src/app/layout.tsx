import type { Metadata } from "next"
import "../styles/globals.scss"
import { inter } from "@/styles/fonts"
import BaseLayout from "@/components/base-layout/BaseLayout"
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
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
