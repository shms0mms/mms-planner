"use client"
import { AppContext, TAppContext } from "@/context/AppContext"
import { useEffect } from "react"
import useScreen from "./useScreen"
import useContext from "./useContext"

const useDecreased = () => {
	const { isDecreased, setIsDecreased } = useContext<TAppContext>(AppContext)
	const screen = useScreen()

	useEffect(() => {
		if (screen === "mobile") setIsDecreased(true)
		else setIsDecreased(false)
	}, [screen])

	return isDecreased
}

export default useDecreased
