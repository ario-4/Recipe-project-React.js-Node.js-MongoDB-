import { useContext, useReducer } from 'react';
import { ThemeContext } from '../context/ThemeContext.js';



export function useTheme() {

    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error('useTheme must be used inside a ThemeProvider')
    }
   

    return context
}