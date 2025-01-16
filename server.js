const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/productModel")
const app = express();


//middleware
//to use jason 
app.use(express.json()) 
//to use form like Key : value pair
app.use(express.urlencoded({extended: false}))



//routes 
app.get("/",(req,res)=>{
    res.send("Hello NODE API");
})



//TO ADD DATA (P  O  S  T)
app.post("/products",async(req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
})




//TO GET DATA (G  E  T)
app.get("/products",async(req,res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
})




//TO GET DATA BY ID (G  E  T)
app.get("/products/:id",async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
})



// TO UPDATE A DATA (P  U  T)
app.put("/products/:id",async(req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
})








//TO DELETE A DATA (D E L E T E)
app.delete("/products/:id",async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `Cannot find any product with ID ${id}`})
        }

        req.status(200).json(product);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})









// CONNECT TO SERVER (M O N G O DB)
mongoose
.connect("mongodb+srv://admin:Smitiphone%4012345@devapi.yxbxg.mongodb.net/?retryWrites=true&w=majority&appName=DevAPI")
.then(() => {

    console.log("Connected to MongoDB");

    app.listen(3000,()=>{
        console.log("Node API is running on port 3000");
    }) 


}).catch((error) => {
    console.log(error);
})