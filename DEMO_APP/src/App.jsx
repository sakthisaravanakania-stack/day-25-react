import React from 'react'
import Card from './card/Card'
import './App.css';

const App = () => {
  return (
    <div className="app_container">
      <Card name="Sarow" email="sarow@gmail.com" btnNum="btn1" />
      <Card name="Mani" email="mani@gmail.com" btnNum="btn2" />
      <Card name="Ram" email="ram@gmail.com" btnNum="btn3" />
    </div>
  )
}

export default App
