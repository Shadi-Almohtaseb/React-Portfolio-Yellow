import { createContext , useReducer } from "react";

export const themeContext = createContext();

const initailState = {darkMode : false};

const themeReduser = (state , action) =>{
    switch (action.type) {
        case 'toggle':
            return {darkMode : !state.darkMode};
            break;
    
        default:
            return state;
            break;
    }
}

export const ThemeProvider = (props) => {const [state , dispatch] = useReducer(themeReduser , initailState)
    return (
            <themeContext.Provider value={{state , dispatch}}>
                {props.children}
             </themeContext.Provider>

        );

}