"use client"
import { usePathname } from "next/navigation"

const checkActiveLink = (href: string) => {
	const pathname = usePathname()
	return pathname === href
}

export default checkActiveLink
