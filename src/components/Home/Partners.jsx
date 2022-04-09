import React from 'react'

import img1 from '../../assets/img/partners-img.jpg'

const Partners = () => {

    const patnersList =[
        {
            id : 1,
            img : img1
        }
    ]
  return (
    <section className='partners'> 
        <div className="container">
            <div className="heading">
              <h1>
                OUR PARTNERS
              </h1>
            </div>

            {/* <div className="partners-carousel">
                {
                    patnersList.map(patner => (
                        <div className='list' key={patner.id}>
                            <div className="list-img">
                                <img src={patner.img} alt='patners img'/>
                            </div>
                        </div>
                    ))
                }
            </div> */}
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src={img1} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={img1} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={img1} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>


        </div>

    </section>
  )
}

export default Partners