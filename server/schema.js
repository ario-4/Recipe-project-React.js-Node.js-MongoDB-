import  mongoose from 'mongoose';
const Schema = mongoose.Schema;


const recipe = new Schema({
    
    title: { type: String },
   method : {type : String},
    date : {type : Date ,default : Date.now()},
    ingredients : {type : Array},
    image :{type :String },
    ingredients : {type : Array},
    
    
    cookingTime : {type :Number}
    
  });


  export default recipe