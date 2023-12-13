import {useState , useEffect } from 'react';


export const useFetch = (url)=>{
  const[data , setData] = useState(null)
  const[isloading , setisLoading]= useState(false)
  const[error , setError]= useState(null)

  useEffect(() =>{
   
   const fetchData =async ()=>{
    setisLoading(true)
    
    try {
       const response = await fetch(url)
       
        if(!response.ok){
           throw new Error(response.data.statsText) 
        }
        const json =await response.json()
         setData(json)
         setisLoading(false) 
         setError(null)    
        } 
     catch (err) {
        setisLoading(false)
        setError(err.masssage)
    }
   }
   
   fetchData()
  } ,[url ])
  
  return{data ,isloading , error}
}

