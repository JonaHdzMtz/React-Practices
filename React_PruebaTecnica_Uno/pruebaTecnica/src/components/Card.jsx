import React from 'react'
import './card.css'
export default function Card(props) {
  return (
    <>
      <section className='cardCompt'>
        <div className="cardMovie">
          <img className='placeholder' src={props.imgSrc} alt="" />
        </div>
        <p className='titleCardMovie'>{props.title}</p>
      </section>
    </>
  )
}
