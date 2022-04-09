import React from 'react'

import img1 from '../../assets/img/newList-img.jpg'
import img2 from '../../assets/img/newList-img2.jpg'
import img3 from '../../assets/img/newList-img3.jpg'


const News = () => {
  const newsList = [
    {
      id : 1,
      img : img1,
      text : 'UNDP and Islamic Relief announce new US$22m partnership to support local economy in Afghanistan',
      date : 'Published march 28th , 2022 '
    },
    {
      id : 2,
      img : img2,
      text : 'Yemen’s climate crisis is threatening lives, livelihoods and culture',
      date : 'Published march 28th , 2022 '
    },
    {
      id : 3,
      img : img3,
      text : 'More than 7 years of supporting Yemen through crisis',
      date : 'Published: 25 March, 2022'
    }
  ]

  return (
    <section className='news'>
        <div className="container">
            <div className="background-heading">
                <h1>WORLD NEWS</h1>
            </div>
            <div className="news-heading heading">
              <h1>
                IR WORLD NEWS
              </h1>
            </div>

            <div className="lists">
              {
                newsList.map(news => (
                  <div className='list' key={news.id}>
                    <div className="list-img">
                        <img src={news.img} alt="" />
                    </div>
                    <div className="list-text">
                        <h3>{news.text}</h3>
                    </div>
                    <div className="list-date">
                      <p>
                        {news.date}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>

              <div className="news-btn">
                <button>VIEW ALL NEWS</button>
              </div>
        </div>

    </section>
  )
}

export default News