import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';


function App() {
  const [value, setValue] = useState('Text in input');
  return (
    <div className="App">
      {/* <Counter/>
      <Counter/> */}

      {/* <h1>{value}</h1>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/> */}

      <ClassCounter/>
    </div>
  );
}

export default App;
