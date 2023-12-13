import {useFetch} from '../hooks/useFetch.js';
import { useParams} from 'react-router-dom'
import './RecipesId.css'


   

export default function RecipesId() {
     const { id } = useParams()
    const url = 'http://localhost:3001/server/' + id
    const {data , isLoading ,error} = useFetch(url)
    console.log(data
      );
   
    
  return (
    <div className="contaner1">
    
       {error && <p className='error'>{error}</p>}
        {isLoading && <div className='loading'><div className='loading-spinner '></div></div>}
    <div className='recipeC'>
        
       
        <h1>{data && data.title}</h1>
        <ul>
            {data && data.ingredients.map(ing =>(
               <li key={ing}>{ing}</li>
                
            ))}
        </ul> 
        <div className='method'>

          {data && data.method}
        </div>
        
       
    </div>
    <div  className='image-box'><img src={data && data.image} alt="" /></div>
    </div>
  )
}
