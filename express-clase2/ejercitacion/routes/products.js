let products = require("../utils/mock");
const express = require("express");

const router = express.Router();

// 1. Retornar todos los productos del array. “/api/products”,

router.get('/products', (req, res) => {
    res.json(products)
})

//2. Obtener un producto específico mediante su ID “/api/products/:id”

router.get('/products/:id', (req, res) => {
    let productID = req.params.id
    const findProductById = products.find( e => e.id === parseInt(productID))
    res.send([findProductById])
})

//3. Agregar un nuevo producto “/api/products”

router.post('/products/add', (req, res) => {
    // const name = req.body.name;
    // const colors = req.body.colors;
    // const price = req.body.price;
    // const quantity = req.body.quantity;
    // const obj = {name, colors, price, quantity};
    // console.log(obj);
    const { name, colors, price, quantity } = req.body
    products.push({ name, colors, price, quantity })
    res.send(`El producto ${name} se agregó.`)
})

//4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,
router.put('/products/:id/:name', (req, res) => {
    const { id, name } = req.params  
    const editName = products.find( e => e.id === parseInt(id))
    editName.name = name
    res.send(editName)
})
//5. Eliminar un producto mediante su ID “/api/products/:id”,

router.delete('/products/:id', (req, res) => {
    const { id } = req.params  
    const delecteProduct = products.map( e => e.id === parseInt(id))
    res.send(delecteProduct)
})

module.exports = { router, products };
