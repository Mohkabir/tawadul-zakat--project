import React from 'react'
import Article from '../components/About/Article'
import Header from '../components/About/Header'
import SideBar from '../components/About/SideBar'

const About = () => {
  return (
    <div className='about'>
      <Header/>
        <SideBar/>
        <Article/>
    </div>
  )
}

export default About