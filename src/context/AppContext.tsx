import { FC, PropsWithChildren, createContext, useState } from "react"
export type TAppContext = {
	isDecreased: boolean
	setIsDecreased: (isDecreased: boolean) => void
}
export const AppContext = createContext<TAppContext | {}>({})

const AppProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [isDecreased, setIsDecreased] = useState(false)
	const value: TAppContext = { isDecreased, setIsDecreased }
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
