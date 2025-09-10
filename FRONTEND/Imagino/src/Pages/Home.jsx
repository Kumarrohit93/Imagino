import React from 'react'
import Header from "../Components/Header"
import Steps from "../Components/Steps.jsx"
import Description from '../Components/Description.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import GenerateButton from '../Components/GenerateButton.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testimonials/>
      <GenerateButton/>
    </div>
  )
}

export default Home
