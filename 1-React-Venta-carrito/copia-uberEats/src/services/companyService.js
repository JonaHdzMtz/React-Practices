
const getCompanies = async () => {
    const response = await fetch('http://localhost:3000/companies');
    const data = await response.json();
    return data;
}

export {
    getCompanies
};