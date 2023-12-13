import './Home.css';
import { useFetch } from '../../hooks/useFetch.js';
import { Link } from 'react-router-dom';



export default function Home() {
  const {  isloading, error } = useFetch('http://localhost:3001/server')

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isloading && <div className='loading'><div className='loading-spinner '></div></div>}
      <div className='link_box'><Link to = '/Recipes'>Recipes</Link></div>
    

    </div>
  )
}
