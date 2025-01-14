import React from 'react'
import { useSelector } from 'react-redux'
export default function Menu(props) {
  const userRedux = useSelector((state) => state.user)
  return (
    <>
    <div>`estado de redux: ${userRedux.email}`</div>
    <div>`estado de props: ${props.name}`</div>
    </>
  )
}
