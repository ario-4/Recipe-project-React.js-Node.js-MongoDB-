import express from 'express';
import Products from '../app.js';
import multer from 'multer';

import path from 'path';



const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

const routers = express.Router()
routers.post('/toggleRecipe', upload.single('image'), async (req, res) => {

    const array = req.body.ingredients.split(',')

    const newrecipe = new Products({
        title: req.body.title,
        method: req.body.method,
        image: `http://localhost:3001/recipePhoto/${req.file.filename}`,
        cookingTime: req.body.cookingTime,
        ingredients: array


    })

    //await newrecipe.save() 
    res.json({
    })


})



export default routers