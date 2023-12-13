import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Recipes from './pages/Recipes/Recipes.js'
import Search from './pages/Search/Search.js'
import Create from './pages/Create/Create.js'
import NavBar from './Components/NavBar.js'


import './App.css';
import RecipesId from './Components/RecipesId.js'
import ThemeSelector from './Components/ThemeSelector.js'
import { useTheme } from './hooks/useTheme.js'




function App() {
  const{state} = useTheme()
  
return (

     <div className={state.mode ? 'dark' : 'App' } >
        
     <BrowserRouter>
       
      <NavBar />
   
      <ThemeSelector />
     

     <Routes>
       <Route path = '/' element = {<Home />} />
       <Route path = '/Create' element = {<Create />}/>
       <Route path = '/Search' element = {<Search />} />
       <Route path = '/Recipes' element = {<Recipes />}/>
       <Route path = '/Recipes/:id' element = {<RecipesId />}/>
    
       
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
