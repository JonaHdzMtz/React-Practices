import { render, screen } from '@testing-library/react';
import App from './App';
import data from './data/Data.json'

describe('Star wars app', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'))

  // it('deberia mostrar una lista de personajes',() =>{
  //   render(<App />);
  //   expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  // })

  // it("deberia mostrar una lista de caracteres del archivo json",() =>{
  //   render(<App />);
  //   data.results.map(character => {
  //     expect(screen.getByText(character.name)).toBeInTheDocument();
  //   })
  // })

  it("deberia recuperar una lista del api", async ()=>{
    window.fetch.mockResolvedValueOnce({
      ok : true,
      json: async () => data
    });
    render(<App />);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.dev/api/people/');
    for(let character of data.results){
      expect(await screen.findByText(character.name)).toBeInTheDocument();
    }
  });

  it("deberia mostrar un mensaje de error si falla la peticion", async ()=>{
    window.fetch.mockResolvedValueOnce(new Error ("Network error"));

    render(<App />);

    expect(await screen.findByText("Network error")).toBeInTheDocument();
})
});

