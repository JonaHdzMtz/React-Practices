
import React from 'react'

export default function RickApiService() {
  const data = fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  return (data)
}
