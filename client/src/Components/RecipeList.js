import { useState } from 'react'
import { useTheme } from '../hooks/useTheme.js'
import './RecipeList.css'

import { Link } from 'react-router-dom'


export default function RecipeList({Recipes}) {
    
  

const {state } = useTheme()




  return (
    <div className='recipe-list'>
      {Recipes.map(recipe =>(
        <div key = {recipe._id} className={state.mode ? 'card darki' : 'card'}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime}minutes to make</p>
            <div>{recipe.method.substring(0,100)}...</div>
           {<Link to = {`/Recipes/${recipe._id}`} style={{backgroundColor : state.btnColor}} >cook this</Link>}
           
        </div>
      ))}
    </div>
  )
}
