import React from 'react'

import carousel from '../../assets/img/carousel image.jpg'
import img2 from '../../assets/img/newList-img2.jpg'
import img3 from '../../assets/img/newList-img3.jpg'



const Header = () => {
  return (
    <header>
          {/* <div classNameName="carousel">
            <div classNameName="img">
              <img src={carousel} alt="carousel img" />
            </div>
          </div> */}


          {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="img carousel-item active">
                <img className="d-block w-100" src={carousel} alt="carousel img"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img3} alt="carousel img"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img2} alt="carousel img"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a classNameName="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div> */}














          <div
            id="carouselExampleIndicators"
            className="home carousel slide"
            data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="img carousel-item active">
                    <img src={carousel} className="d-block w-100" alt="..."/></div>
                    <div className="img carousel-item">
                        <img src={img2} className="d-block w-100" alt="..."/></div>
                        <div className="img carousel-item">
                            <img src={img3} className="d-block w-100" alt="..."/>
                        </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
    </header>
  )
}

export default Header