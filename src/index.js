import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


let callback = (event) => {
  event.target.style.backgroundColor = "aqua";
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={callback} />
  </div>,
  document.getElementById('root')
);
