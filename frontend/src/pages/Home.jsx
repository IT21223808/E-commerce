import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offer from '../components/Offer'
import NewCollection from '../components/NewCollection'
import NewLetter from '../components/NewLetter'


const Home = () => {
  return (
    <>
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollection/>
    <NewLetter/>
    </>
  )
}

export default Home