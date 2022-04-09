import React from 'react'

import img1 from '../../assets/img/worldlist-img.jpg'
import img2 from '../../assets/img/worldlist-img2.jpg'
import img3 from '../../assets/img/worldlist-img3.jpg'



const WorldWide = () => {

    const worldList = [
        {
          id : 1,
          img : img1,
          heading : 'WAQF',
          link : 'Read more'
        },
        {
            id : 1,
            img : img2,
            heading : 'HUMANITARIAN ACADEMY FOR DEVELOPMENT',
            link : 'Read more'
          },
        {
            id : 1,
            img : img3,
            heading : 'ISLAMIC SOCIAL FINANCE',
            link : 'Read more'
        }
    ]

  return (
    <section className='worldwide'>
        <div className="container">
            <div className="worldwide-heading heading">
              <h1>
                STRATEGIC BUSINESS UNITS
              </h1>
            </div>

            <div className="worldwide-list lists">
                {
                    worldList.map(world => (
                        <div className='list' key={world.id}>
                            <div className="list-img">
                                <img src={world.img} alt={world.text}/>
                                <div className="list-text">
                                    <h2>
                                        {world.heading}
                                    </h2>
                                    <p>{world.link}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>



        </div>
    </section>
  )
}




export default WorldWide