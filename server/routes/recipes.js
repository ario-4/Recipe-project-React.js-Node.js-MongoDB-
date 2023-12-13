import express from 'express';
import Products from '../app.js';



const routers = express.Router()

routers.get('/recipes', async (req, res) => {
    let recipes;
    try {
        if (req.query) {
            const query = req.query.q
            const re = new RegExp(`^${query}.*$`, 'gi')
            recipes = await Products.find({title : re}) 
            res.json(recipes) 
        }else{
            res.json('Recipe not find')
        }
    } catch (error) {
           console.log(error);
    }
           

})



routers.get('/server', async (req, res) => {
    await Products.find()
        .then(products => res.json(products))

})




routers.get('/server/:id', async (req, res) => {
    await Products.findById(req.params.id)
        .then(product => res.json(product))

})
export default routers