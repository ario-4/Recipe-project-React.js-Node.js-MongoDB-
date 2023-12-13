import { useState , useReducer } from "react"




 export function Input(){
    
    const [input ,setInput] = useState({
      title : '',
      des : '',
      nomber : 0
    })
    const initialState = {
      title : '',
      des : '',
      nomber : 0
    }
    function formReducer(state , action){
      switch (action.type) {
        case 'change-input' :
          return ({...state , [action.data.name] : action.data.value })
        default:
          
      }
    }
  
    function handleChange(e){
       dispatch({type : 'change-input' , data : {name : e.target.name , value : e.target.value }})
       console.log(state);
    }
    const [state , dispatch] = useReducer(formReducer , initialState)
    return(
      <form action="">
        <input type="text" name = 'title' onChange={handleChange}/>
        <input type="text" name = 'des' onChange={handleChange} />
        <input type="nomber" name = 'nomber' onChange={handleChange} />
       </form>
    )
  }