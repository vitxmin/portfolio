import React from "react"
import Header from "./Component/Head/Header"
import "./App.css"
import Home from "./Component/Hero/Home"
import Activities from "./Component/Activities/Testimonial";
import Portfolio from "./Component/Portfolio/Portfolio"
import Resume from "./Component/Education/Resume"
import Hobbies from "./Component/Hobbies/Hobby"


const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Portfolio />
      <Activities />
      <Hobbies />
      <Resume />
    </>
  )
}

export default App