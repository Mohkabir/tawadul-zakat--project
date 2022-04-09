import React from 'react'

import img1 from '../../assets/img/impact.png'
import img2 from '../../assets/img/impact2.png'
import img3 from '../../assets/img/impact3.png'


const Impact = () => {
    const impactList = [
        {
            id : 1,
            img : img1,
            heading : `133 million people`,
            text : 'supported since 1984',
            button : 'JOIN US'
        },
        {
            id : 2,
            img : img2,
            heading : `Nearly £59 million`,
            text : 'invested in 370 humanitarian projects in 2020',
            button : 'JOIN US'
        },
        {
            id : 3,
            img : img3,
            heading : `2.1 million people`,
            text : 'helped by development projects in 2020',
            button : 'JOIN US'
        }
    ]
  return (
    <section className='impact'>
        <div className="container">
            <div className="heading">
              <h1>
                OUR IMPACT
              </h1>
            </div>

            <div className="impact-list lists">
              {
                impactList.map(impact => (
                  <div className='list' key={impact.id}>
                    <div className="list-img">
                        <img src={impact.img} alt="" />
                    </div>
                    <div className="list-text">
                        <h2>{impact.heading}</h2>
                        <p>{impact.text}</p>
                        <button>{impact.button}</button>
                    </div>
                  </div>
                ))
              }
            </div>

        </div>    
    </section>
  )
}

export default Impact