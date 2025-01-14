//recuperar los negocios y productos de la base de datos



const getNegociosProductos = async () => {
    const response = await fetch('http://localhost:3000/');
    const data = await response.json();
    return data;
}


const getAllProducts = async () => {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    return data;
}

const addProductToCard = async (item) =>{
    const response = await fetch('http://localhost:3000/addToCart',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    const status = response.status;
    return status;
}


export {
    getNegociosProductos,
    getAllProducts,
    addProductToCard
};