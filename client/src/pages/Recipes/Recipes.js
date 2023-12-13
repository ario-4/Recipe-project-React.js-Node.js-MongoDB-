import './Recipes.css';

import RecipeList from '../../Components/RecipeList.js';
import {useFetch} from '../../hooks/useFetch.js';

export default function Recipe() {
 
  const { data : datas , isLoading ,error} = useFetch('http://localhost:3001/server')


  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <div className='loading'><div className='loading-spinner '></div></div>}
      {datas && <RecipeList Recipes = {datas}/>}
     
      
      
    </div>
  )
}
