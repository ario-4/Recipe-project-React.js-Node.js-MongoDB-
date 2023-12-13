import { Link } from 'react-router-dom'
import Search from '../Components/Search.js';
import './NavBar.css'
import { useTheme } from '../hooks/useTheme.js';



export default function NavBar() {
const { state } = useTheme()



  return (
    
    <div className='navbar' style={{background : state.color}}>
        <nav>
            <Link to = '/' className='brand'><h1>Recipe Foood</h1></Link>
            <Search />

            <Link to = '/Create' style={{marginLeft : '100px'}}>Create</Link>
            
        </nav>
    </div>
  )
}
