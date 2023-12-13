import { useLocation } from 'react-router-dom';
import './Search.css';

import {useFetch} from '../../hooks/useFetch.js';

import RecipeList from '../../Components/RecipeList.js';







export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const params = queryParams.get('q')

   const url = 'http://localhost:3001/recipes?q='+params
   const {data , isLoading , error} = useFetch(url)
   
  return (
    <div>
        {data && < RecipeList Recipes ={data} />}
    </div>
  )
}
