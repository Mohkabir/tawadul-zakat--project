import React from 'react'

import img1 from '../../assets/img/focuslist-img.jpg'
import img2 from '../../assets/img/focuslist-img2.jpg'
import img3 from '../../assets/img/focuslist-img3.jpg'
import img4 from '../../assets/img/focuslist-img4.jpg'


const Focus = () => {

    const single = {
        id : 1,
        img : img1,
        heading : 'Lebanon needs us now more than ever',
        text : 'Life in Lebanon is becoming increasingly difficult, with very few people able to escape the crippling fall out of the country’s years-long financial crisis. It is the most vulnerable, including the many refugees from neighbouring Syria, that have been hardest hit, while millions of others who previously lived comfortably have been pushed into poverty. On a recent visit to Lebanon Islamic Relief’s Deputy Director of Global Programmes Operations, Dr Ahmed Nasr, saw first hand how severe the humanitarian situation has become.',
        button : 'Read more'
      }

    const focusList = [
        {
            id : 2,
            img : img2,
            heading : '“My mother knew I had dreams beyond being someone’s wife”'
        },
        {
            id : 3,
            img : img3,
            heading : 'Sustainable peace depends on involving women and young people in peacebuilding'
        },
        {
            id : 4,
            img : img4,
            heading : ' The science couldn’t be clearer: communities must lead climate adaptation action'
        }
      ]

  return (
    <section className='focus'>
        <div className="container">
            <div className="focus-heading heading">
              <h1>
                FOCUS AREAS
              </h1>
            </div>

            <div className="focus-grid">
                <div className="focus-grid-1">
                    <div className="focus-img">
                        <img src={single.img} alt={single.heading} />
                    </div>
                    <div className="focus-text">
                        <h2>{single.heading}</h2>
                        <p>{single.text}</p>
                        <a href="">{single.button}</a>
                    </div>
                </div>

                <div className="focus-list lists">
                {
                    focusList.map(focus => (
                        <div className='list' key={focus.id}>
                            <div className="focus-img list-img">
                                <img src={focus.img} alt={focus.heading} />
                            </div>
                            <div className="focus-text list-text">
                                    <h3>{focus.heading}</h3>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>

        </div>
    </section>
  )
}

export default Focus