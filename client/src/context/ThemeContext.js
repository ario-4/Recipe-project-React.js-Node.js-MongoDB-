import { createContext, useReducer } from "react";

export const ThemeContext = createContext()


function themeReducer(state , action) {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, color: action.payload }

        case 'CHANGE-BTNCOLOR1':
            return { ...state, btnColor : action.dataColor }

        case 'CHANGE-MODE':
            return { ...state, mode : action.payload}

        default:
            return state
    }
}
export function ThemeProvider({ children }) {

    const [state, dispatch] = useReducer(themeReducer, { color: '#58249c', btnColor: '#d7c4f7' , mode : false })




    const changeColor = (color  , btn ) => {

        dispatch({ type: 'CHANGE', payload: color })

        
         dispatch({ type: 'CHANGE-BTNCOLOR1', dataColor: btn }) 

    }

    const changeMode =( model )=>{
        dispatch({type: 'CHANGE-MODE' , payload : model})
    }


    return (
        <ThemeContext.Provider value={{ state, changeColor , changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

