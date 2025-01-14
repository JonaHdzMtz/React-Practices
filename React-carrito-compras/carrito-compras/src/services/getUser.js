import axios from 'axios';
const  getUser = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    // Retornamos los datos del usuario
    return response.data;
}

export default getUser;