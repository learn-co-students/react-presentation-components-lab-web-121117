import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const logWTF = () => { console.log("WTF")}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={logWTF} />
  </div>,
  document.getElementById('root')
);