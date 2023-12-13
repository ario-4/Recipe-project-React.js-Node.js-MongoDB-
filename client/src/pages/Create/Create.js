import './Create.css'
import axios from 'axios';
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../../hooks/useTheme.js';



export default function Create() {

  const fileInput = useRef()

  const [newIngredient, setNewIngredient] = useState('')
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [ingredient, setIngredient] = useState([])




  const navigate = useNavigate()




  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.set("image", fileInput.current.files[0])
    formData.append("title", title)
    formData.append("method", method)
    formData.append("cookingTime", cookingTime)
    formData.append("ingredients", ingredient)

    try {

      const respons = await fetch('http://localhost:3001/toggleRecipe', {
        method: "POST",

        body: formData,
      })
      const parseResponse = await respons.json()
      if (respons.ok) {
        console.log(respons);
         console.log(parseResponse);
      
       
          navigate('../Recipes')
       

      } else {
        console.log('some error occured');
      }
    } catch (error) {
      console.log(error.massage);
    }
  }



  function handleClick(e) {
    e.preventDefault()
    if (newIngredient && ![...ingredient].includes(newIngredient) ) {
      setIngredient(prev => [...prev, newIngredient])
      setNewIngredient('')
      document.querySelector('.ingredient-input').focus()
     
    }
   
  }




  let index;
  function removeIng(e) {
    if (e.target.dataset.id) {

      index = e.target.dataset.id
      ingredient.splice(index, 1)
      setIngredient([...ingredient])

    }
  }


const {state} = useTheme() 

  return (
    <div className={state.mode ?  'create darki':'create' }>
      <h1>Add a New Recipe</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="">
          <span>Recipe Title:</span>
          <input type="text"

            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label >
          <span>ingredients:</span>
          <div className='ingredients'>

            <input type="text" className='ingredient-input' onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} />
            <button  onClick={handleClick} style={{backgroundColor : state.color}}>Add</button>
          </div>
          <div className="ingredient-item">

            {ingredient && ingredient.map((ing, index) =>
            (
             
              <div className={ing === newIngredient ? 'repet p-tagContaner' : 'p-tagContaner'}  key={ing} >
                <p>{ing}</p>
                <div className='icon' onClick={removeIng} > <FontAwesomeIcon icon={faXmark} data-id={index} /></div>
              </div>)

            )}


          </div>

        </label>

        <label >
          <span>Recipe Method:</span>
          <textarea

            onChange={(e) => setMethod(e.target.value)}
          ></textarea>
        </label>

        <label >
          <span>Cooking Time(minute):</span>
          <input
            type="number"

            onChange={(e) => setCookingTime(e.target.value)}
          />
        </label>

        <label>
          <span>Upload Image</span>
          <input ref={fileInput} type="file" name='avatar' />
        </label>
        <button type='submit' style={{backgroundColor : state.color}} >submit</button>


      </form>

    </div>
  )
}

