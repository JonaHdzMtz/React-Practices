export async function getPeople() {
    try {
        const response = await fetch('https://swapi.dev/api/people/');
        if(!response.ok) {
            throw new NetworkError();
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

class NetworkError extends Error {
    constructor() {
        super("Network error");
    }
}

export async function getCharacter(id = 1){
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const data  = response.json();
    return data;
}

export async function searchCharacter(name = ""){
    const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    const data = response.json();
    return data;
}