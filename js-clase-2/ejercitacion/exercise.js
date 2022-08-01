const { products } = require("./utils/products");

/************************************************************************************
PUNTO 1
utiliza addingIdToProduct para agregarle un id único a cada producto empezando en 1
*************************************************************************************/
// Tu código acá
const addingIdToProduct = () => {
	const addingId = products.map((elem, index) => {
		elem['id'] = index + 1;
		return elem
	})
	return addingId;
};
/*****************************************************************************
 * PUNTO 2
 * utiliza returningTheNames para retornar el nombre de cada uno de los productos
 ******************************************************************************/
// Tu código acá
const returningTheNames = (nameProducts) => nameProducts.map(element => element.name);
/********************************************************************************
PUNTO 3
utiliza searchID para retornar el producto cuyo id corresponda al parametro pasado.
Si ejecuto searchID(3) debería devolver el objeto entero, cuyo id sea 3
************************************************************************************/
// Tu código acá
const searchID = (id) => {
	// addingIdToProduct(products);
	const coincidences = products.find(ele => ele.id === id)
	if(coincidences === undefined){
		return "no hubo coincidencias"
	}
	return coincidences;
};
/*****************************************************************************
PUNTO 4
utiliza matchingColors para retornar los productos que hagan match con 
el color pasado por parámetro
******************************************************************************/
// Tu código acá
const matchingColors = (color) => {
	return colorFilter = products.filter(ele => ele.colors.includes(color))
};
/*****************************************************************************
PUNTO 5
utiliza colorsLength para retornar los productos que no tengan color
******************************************************************************/
// Tu código acá
const colorsLength = () => {
	return colorsEmpty = products.filter(item => item.colors.length === 0)
};

/*****************************************************************************
PUNTO 6
utiliza addProduct para agregar un nuevo producto que contenga las mismas
propiedades (name,price,quantity,colors).
Retornar los productos donde se incluya el producto agregado
******************************************************************************/
// Tu código acá
const addProduct = (newProduct) => {
	if(newProduct.name && newProduct.price && newProduct.quantity && newProduct.colors){
		return products.push(newProduct)
	}
};

/*****************************************************************************
PUNTO 7
utiliza deleteProduct para Eliminar del array de productos a aquellos sin stock (con quantity 0)
******************************************************************************/
// Tu código acá
const deleteProduct = () => {
	return withStock = products.filter( ele => ele.quantity !== 0)
};
/*****************************************************************************
PUNTO 8
utiliza existingProducts para sumar el numero total de stock entre todos los productos.
Debe retornar dicho numero
******************************************************************************/
// Tu código acá
const existingProducts = (stock) => {
	let initialValue = 0;
	for(let i = 0; i < stock.length; i++){
		initialValue += stock[i].quantity
	}
	return initialValue;
};

/*****************************************************************************
PUNTO 9
utiliza showHigherPrice para retornar los productos cuyo importe sea mayor al pasado por parametro
Esta función recibe el array de productos y el importe (precio) a buscar:
showHigherPrice(products,500) 
debería devolver 2 objetos, ya que solo 2 productos tienen un valor mayor a 500
******************************************************************************/
// Tu código acá
const showHigherPrice = (stock,priceHigher) => {
    const productsHigherPrice = stock.filter(item => item.price > priceHigher)
	return productsHigherPrice
};
console.log(showHigherPrice(products, 50));

module.exports = {
	addingIdToProduct,
	existingProducts,
	deleteProduct,
	addProduct,
	colorsLength,
	matchingColors,
	searchID,
	returningTheNames,
	showHigherPrice,
};
