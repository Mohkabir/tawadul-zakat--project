
import React from 'react'
import Footer from '../components/Footer'

import NavBar from '../components/NavBar'


const AppLayout = (props) => {

  return (
    <div className='applayout'>
      <NavBar/>
      <div className='children'>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default AppLayout