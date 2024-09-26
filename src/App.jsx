import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Benefits from './components/Benefits'
import Customer from './components/Customer'
import Features from './components/Features'
import Card from './components/card'
function App() {


  return (
    <>
<Header/>
<Benefits/>
<Customer/>
<Features/>
<Card/>
    </>
  )
}

export default App
