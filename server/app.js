import  mongoose from 'mongoose';
import express from 'express';
import recipe  from './schema.js';
import homeRouters from './routes/recipes.js'
import toggle from './routes/toggleRecipe.js'
import cors from 'cors'



const app = express()

 const Recipes = mongoose.model('recipe' , recipe )



const DB_URI = 'mongodb+srv://test-DB:Reza12131@practicar-db.ffobuyc.mongodb.net/Tasks'

  mongoose.connect(DB_URI)
.then((con) => console.log(`conected in ${con.connection.host}`))
.catch((e) => console.log(e))

app.use('/recipePhoto' ,express.static('upload/images'))
app.use(express.json())
app.use(cors())
app.use(homeRouters)
app.use(toggle)


 app.listen(3001 ,console.log('concted port 3001') ) 


export default Recipes





