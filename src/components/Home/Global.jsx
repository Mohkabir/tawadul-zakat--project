import React from "react";

import img1 from "../../assets/img/globallist-img.jpg";
import img2 from "../../assets/img/globallist-img2.jpg";
import img3 from "../../assets/img/globallist-img3.jpg";

const Global = () => {

  return (
    <section className="global">
      <div className="container">
        <div className="global-heading heading">
          <h1>GLOBAL CAMPAIGNS</h1>
        </div>



        


        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>


          <div className="carousel-inner global-carousel d-flex">
            <div className="carousel-item active global-list">
              <div className="list-img">
                <img 
                src={img1} 
                className="d-block w-100" 
                alt="..." 
                />
                <div 
                className="carousel-caption d-md-block list-text"
                >
                    <h1>GENDER JUSTICE</h1>
                </div>
              </div>
            </div>

            <div className="carousel-item global-list">
              <div className="list-img">
                <img 
                src={img2} 
                className="d-block w-100" 
                alt="..." 
                />
                <div 
                className="carousel-caption d-md-block list-text"
                >
                    <h1>GENDER JUSTICE</h1>
                </div>
              </div>
            </div>

            <div className="carousel-item global-list">
              <div className="list-img">
                <img 
                src={img3} 
                className="d-block w-100" 
                alt="..." 
                />
                <div 
                className="carousel-caption d-md-block list-text"
                >
                    <h1>GENDER JUSTICE</h1>
                </div>
              </div>
            </div>
          </div>




          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="global-btn">
          <button>DONATE</button>
          <button>VIEW ALL CAUSES</button>
        </div>
      </div>
    </section>
  );
};

export default Global;
