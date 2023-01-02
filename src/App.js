import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


function App() {

  const [count,setCount ] = useState(0);
  return (
    <div className="App">
      <h1>素数カウント</h1>

      <h2>{count}</h2>
      <div className='flex'>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
    
      </div>
    </div>
  );
}

export default App;
