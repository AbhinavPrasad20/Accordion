import React, { useState } from 'react'
import "./App.css"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const Data = ({ title, body }) => {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div className='accordion-item' onClick={handleClick}>

      <div className='accordion-title'>
        <h5>{title}</h5>
        <p>
          {show ? <BsFillCaretUpFill size={20}/> : <BsFillCaretDownFill size={20}/>}
        </p>
      </div>
      <div>
        {show && <p>{body}</p>}
      </div>

    </div>
  )
}

export default Data;