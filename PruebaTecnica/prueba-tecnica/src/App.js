import { getCharacter, getPeople, searchCharacter } from './api/People';
import './App.css';
import data from './data/Data.json'
import { useState, useEffect, useRef } from 'react';

function App() {
  const inputRef = useRef(null);
  const [people, setPeople] = useState([]);
  const [error, setError] = useState({ hasError: false });
  const [currentCharacter, setCurrentCharacter] = useState(1);
  const [details, setDetails] = useState({});
  const [textSearch, setTextSearch] = useState("");
  useEffect(() => {
    getPeople()
      .then(data => setPeople(data.results))
      .catch(handleError)
  }, []);

  const showDetails = (character) => {
    // slide es para que me devuelva los ultimos elementos de un array y el [0] es para que me devuelva el id(el ultimo elemento es '')
    const id = Number(character.url.split('/').slice(-2)[0]);
    console.log(id);
    setCurrentCharacter(id);
  }

  const handleError = (error) => {
    setError({ hasError: true, message: error.message });
  }

  const onChangeTextSearch = (event) => {
    console.log(event.target.value);
    event.preventDefault();
    const text = inputRef.current.value;
    setTextSearch(text);
  }

  const onSearchSubmit = (event) => {
  
    if (event.key !== 'Enter') return;
      inputRef.current.value = '';
      setDetails({});
      searchCharacter(textSearch).then((data) => {
        setPeople(data.results);
      }
      ).catch(handleError);
    
  }


  useEffect(() => {
    getCharacter(currentCharacter)
      .then(setDetails).catch(handleError);
  }, [currentCharacter]);

  return (
    <div>
      <input
      
        ref={inputRef}
        onChange={onChangeTextSearch}
        onKeyDown={onSearchSubmit} 
        type="text"
        placeholder="Search"  />
      <ul>
        {error.hasError && <div>{error.message}</div>}
        {people.map(character => (
          <li key={character.name} onClick={() => showDetails(character)} >{character.name}</li>
        ))}
      </ul>
      
      {details && (
        <div>
          <h2>{details.name}</h2>
          <p>Height: {details.height}</p>
          <p>Mass: {details.mass}</p>
          <p>Eye color: {details.eye_color}</p>
          <p>Hair color: {details.hair_color}</p>
        </div>
      )}
    </div>
  );
}


export default App;
