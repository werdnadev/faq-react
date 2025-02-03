import React, { useState } from 'react'
import plusIcon from "../../public/assets/images/icon-plus.svg"
import minusIcon from "../../public/assets/images/icon-minus.svg"

const ToggleButton = ({isToggle, setIsToggle}) => {

  const [image, setimage] = useState(false);

  function toggle () {
    setIsToggle(!isToggle)
    setimage(!image)
  }

  return (
    <button 
    className='toggle' 
    onClick={toggle}
  >
    <img 
      src={image ? minusIcon : plusIcon} 
      alt={image ? "Collapse" : "Expand"}
    />
  </button>
  )
}

export default ToggleButton
