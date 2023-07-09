import React, { createContext, useContext} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [basketCount, setBasketCount] = React.useState(0);
    return (
        <AppContext.Provider 
            value={{
                basketCount,
                setBasketCount,
            }}
        >
            {children}
        </AppContext.Provider>)
}

const useGlobalAppContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalAppContext}