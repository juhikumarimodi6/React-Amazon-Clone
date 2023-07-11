import React, { createContext, useContext} from "react";
import { reducer, initialState } from "../reducer/AppReducer";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    console.log(state);
    return (
        <AppContext.Provider value={{ContextState: state, ContextDispatch: dispatch }} >
            {children}
        </AppContext.Provider>)
}

const useGlobalAppContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalAppContext}