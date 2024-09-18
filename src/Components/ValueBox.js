import React from 'react'
import './all.css';



const ValueBox = ({value, onClick}) => {
  return (
    <div>
      <button className='valuebox' onClick={onClick}>{value}</button>
    </div>
  )
}

export default ValueBox
