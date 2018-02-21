import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let hello = () => {
  console.log("Goodbye")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={hello} />
  </div>,
  document.getElementById('root')
);
