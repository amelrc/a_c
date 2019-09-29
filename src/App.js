import React from 'react';
import './App.scss';
import FullLogo from './img/ac-full-logo.png';
// import Logo from './components/logo';

function App() {
  return (
    <div className="App">
      <img className='full-logo' src={FullLogo} alt='logo' />
      <h1>hello</h1>
    </div>
  );
}

export default App;
