import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar ht1="ABES"/>
      <br/>
      <Card name="Mickey" age={5}/>
      <br/>
      <Card name="Cartoon" age={7}/>
      <br/>
      <Card name="Mouse" age={6}/>
    </div>
  )
}

export default App
