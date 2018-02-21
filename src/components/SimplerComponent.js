import React from 'react'


const SimplerComponent = (props) => {
  return (
    <div onClick={props.handleClick}>
      I am just happy{props.handleClick ? `!` : `.`}
    </div>
  )
}

export default SimplerComponent
