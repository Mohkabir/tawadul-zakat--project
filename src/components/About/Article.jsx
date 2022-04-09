import React from 'react'
import img1 from '../../assets/img/about-article-img.jpg'


const Article = () => {
    const valueList = [
        {
            img : img1,
            h2 : 'Our values and faith perspective',
            p : 'Islamic Relief is guided by the timeless values and teachings of the Qur’an and Sunnah, the prophetic example. In particular, our organisation is committed to five key values:',
            span : 'Islamic Relief staff in South Africa prepare food parcels for distribution to vulnerable families.',
            li1 : 'Sincerity (ikhlas) – We are driven and motivated by sincerity to God and our duty to humanity.', 
            li2 : 'Excellence (ihsan) – A commitment to excellence is a hallmark of our operations, programmes and conduct towards the vulnerable people we serve.', 
            li3 : 'Compassion (rahma) – Every life is precious, so we join other humanitarian actors in easing the suffering caused by disasters, poverty and injustice.', 
            li4 : 'Custodianship (amana) – We value and protect the Earth and its resources, including its people, and we aim to honour the trust people place in us to be transparent and accountable.', 
        },
        {
            img : img1,
            h2 : 'Our global strategy',
            p : 'Our bold global strategy for 2017-2021 focuses our expertise and resources in the service of the world’s most vulnerable people. Our four global goals are:',
            span : 'Islamic Relief staff in South Africa prepare food parcels for distribution to vulnerable families.',
            li1 : 'Our bold global strategy for 2017-2021 focuses our expertise and resources in the service of the world’s most vulnerable people. Our four global goals are:', 
            li2 : 'Our bold global strategy for 2017-2021 focuses our expertise and resources in the service of the world’s most vulnerable people. Our four global goals are:', 
            li3 : 'Our bold global strategy for 2017-2021 focuses our expertise and resources in the service of the world’s most vulnerable people. Our four global goals are:', 
            li4 : 'Our bold global strategy for 2017-2021 focuses our expertise and resources in the service of the world’s most vulnerable people. Our four global goals are:', 
        },
        {
            img : img1,
            h2 : 'Our strategic partnerships',
            p : 'To maximise our impact, Islamic Relief works with a diverse range of strategic partners who share our humanitarian goals. These include:',

            span : 'Islamic Relief staff participate in a climate strike in Birmingham, UK.',
            li1 : 'Arab Fund for Economic and Social Development (AFESD)', 
            li2 : 'Bond', 
            li3 : 'CAFOD (Catholic Agency for Overseas Development)', 
            li4 : 'CHS Alliance',
            li5 : 'Climate Action Network International',
            li6 : 'Disasters Emergency Committee (DEC)',
            li7 : 'Finn Church Aid',
            li8 : 'Foreign, Commonwealth & Development Office (FCDO)'
        }
    ]
  return (
    <section className='article'>
        <div className="container">
            <div className="img">
                <img src={img1} alt="image1" />
            </div>
            <div className="text">
                <p>
                    <b>Islamic Relief is a faith-inspired humanitarian aid and development agency working to save and transform the lives of some of the world’s most vulnerable people. Established in the UK in 1984, we work in over 45 countries, assist people of all faiths according to need and do not discriminate in any way.</b>
                </p>
                <p>
                    Close to the communities we serve, we work hard to understand their culture and needs and gain their trust. Our proximity means we can often respond swiftly to emergencies and work in areas that other organisations cannot access.
                </p>
            </div>
            <div className="wrapper">
            {
                valueList.map(value => (
                    <div className='value' key={value.h2}>
                        <div className="img">
                            <img src={value.img} alt="image1" />
                            <span>{value.span}</span>
                        </div>
                        <h2>{value.h2}</h2>
                        <p>{value.p}</p> 
                        <ul className='value-list'>
                            <li>{value.li1}</li>
                            <li>{value.li2}</li>
                            <li>{value.li3}</li>
                            <li>{value.li4}</li>
                            {/* <li>{value.li5}</li>
                            <li>{value.li6}</li>
                            <li>{value.li7}</li>
                            <li>{value.li8}</li> */}
                        </ul>
                    </div>
                ))
            }
            </div>
            <div className="btn">
                <button className='share'>share</button>
                <button className='tweet'>tweet</button>
                <button className='share'>share</button>
                <button className='mail'>mail</button>
            </div>
        </div>

    </section>
  )
}

export default Article