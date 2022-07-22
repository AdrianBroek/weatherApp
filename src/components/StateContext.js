import { createContext, useState } from "react";

const StateContext = createContext()

export function StateProvider({children}){
    const [data, setData] = useState()
    const [city, setCity] = useState('Madrid')

    return (
        <StateContext.Provider value={{data, setData, city, setCity}}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContext