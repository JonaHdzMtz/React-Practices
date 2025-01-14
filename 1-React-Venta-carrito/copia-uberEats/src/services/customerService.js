const getCartCustomer = async (idCustomer) => {
    console.log(idCustomer)
    const response = await fetch(`http://localhost:3000/customercart/${idCustomer}`);
    const data = await response.json();
    console.log(data)
    return data;
}

const setCustomerOrder = async () => {
    
}

export {
    getCartCustomer
}
