import React from 'react'
import Focus from '../components/Home/Focus'
import Global from '../components/Home/Global'
import Header from '../components/Home/Header'
import Impact from '../components/Home/Impact'
import Mission from '../components/Home/Mission'
import News from '../components/Home/News'
import Partners from '../components/Home/Partners'
import WorldWide from '../components/Home/WorldWide'

const Home = () => {
  return (
    <>
        <Header/>
        <News/>
        <Global/>
        <Focus/>
        {/* <Mission/>
        <Impact/> */}
        {/* <WorldWide/>
        <Partners/> */}
    </>
  )
}

export default Home