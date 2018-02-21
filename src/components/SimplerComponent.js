import React from 'react'


const SimplerComponent = () => {

  function handleClick(event) {
    console.log("hello")
    return true
  }

  return (
    <div onClick={handleClick}>
      I am just happy {handleClick() ? `!` : `.`}
    </div>
  )
}

export default SimplerComponent
