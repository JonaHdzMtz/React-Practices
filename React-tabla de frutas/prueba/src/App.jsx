import "./App.css"
import { useRef , useEffect, useState} from 'react'
import {PRODUCTS as products} from './Data'

export default function App() {
  const input = useRef(null)
  const [isActivate, setIsActivate] = useState(false)
  const [fruits, setFruits] = useState(products)

const handleInput = () =>{
  console.log(input.current.value)
}

const handlecheckbox = () =>{
  setIsActivate(!isActivate)
  
}
useEffect(()=>{ 
  if(isActivate){
    setFruits((prevState) =>{
      return  prevState.filter((item) => item.stocked === true)
    }
    ) 
  }else{
    setFruits(products)
  }} ,[isActivate])

  return (
    <>
      <div className='container'>
          <div className='table'>
            <input placeholder='Buscar...' type="text"  name='input' ref={input}  onChange={handleInput}/>
            <br />
            <input type="checkbox"  onChange={handlecheckbox} />
            <label>mostrar solo disponible</label>
            <table>
              <thead>
                <tr>
                  <th>nombre</th>
                  <th>precio</th>
                </tr>
              </thead>
              <tbody>
                {
                  fruits.map((item,index)=>(
                    <tr key={index}>
                      <td style={
                      {
                        color : item.stocked ? 'black' : 'red'
                      }
                      } >{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            
          </div>
      </div>
    </>
  )
}


// <table>
//               <thead>
//               <tr>
//                 <th>nombre</th>
//                 <th>apellidos</th>
//                 <th>email</th>
//               </tr>
//               </thead>
//               <tbody>
//               <tr>
//                 <td>kiko</td>
//                 <td>palomaresasdasdasdasdasdasd</td>
//                 <td>email </td>
//               </tr>
//               </tbody>
              
             
              
//             </table>