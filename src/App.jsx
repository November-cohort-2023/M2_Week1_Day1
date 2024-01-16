
//App is a functional component

import Navbar from "./components/Navbar"

import Footer from './components/Footer'

import './App.css'


function App() {

  let myName = "Omar"
  // Components return JSX

  return (
    // JSX returns can only have 1 parent element
    <>
      <Navbar></Navbar>

      <h1>Welcome {myName.toUpperCase()}</h1>
      <p></p>
      <h2></h2>
      <a href="">jpme</a>
      <Navbar></Navbar>
      <Footer></Footer>
      <Footer/>
    </>

  )
}

export default App
