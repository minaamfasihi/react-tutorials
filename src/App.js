import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

// since Greet is exported as default, it can be imported with any name.
// like: import MyComponent from './components/Greet';
// However, if it was exported as named export like:
// export const Greet = () => ...
// then it should be imported like:
// import { Greet } from './components/Greet'

import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome /> */}
      <Hello name="Clark" heroName="Batman">
        <p>This is children props</p>
      </Hello>
      <Hello name="Bruce" heroName="Superman">
        <button>Action</button>
      </Hello>
      <Hello name="Diana" heroName="Wonder Woman" />
      <Welcome name="Jagga" heroName="Jagga Father" />
      <Welcome name="Nobody" heroName="Nobody father" />
      <Welcome name="Somebody" heroName="Somebody mother" />
    </div>
  );
}

export default App;
