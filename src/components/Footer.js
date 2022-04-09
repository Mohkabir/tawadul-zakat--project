import React, { useEffect, useState } from 'react'
import logo from '../assets/img/footer-logo.png'

const Footer = () => {
    const [media , setMedia] = useState(false)

    const list = [
        {
            id: 1,
            title : 'WHAT WE DO',
            list1 : 'Protecting life and dignity',
            list2 : 'Protecting life and dignity',
            list3 : 'Protecting life and dignity'

        },
        {
            id: 2,
            title : 'WHAT WE DO',
            list1 : 'Protecting life and dignity',
            list2 : 'Protecting life and dignity',
            list3 : 'Protecting life and dignity'
        },
        {
            id: 3,
            title : 'WHAT WE DO',
            list1 : 'Protecting life and dignity',
            list2 : 'Protecting life and dignity',
            list3 : 'Protecting life and dignity'
        },
        {
            id: 4,
            title : 'WHAT WE DO',
            list1 : 'Protecting life and dignity',
            list2 : 'Protecting life and dignity',
            list3 : 'Protecting life and dignity'
        }
    ]

    useEffect(() => {
        window.innerWidth >= 760 ? setMedia(true) : setMedia(false);
    },[window.innerWidth])

    const detectSize = () => {
        window.innerWidth >= 760 ? setMedia(true) : setMedia(false);
    }

    window.onresize = detectSize;

    console.log(media)

  return (

    <footer>
        <div className="caf">
            <div className="caf-items max-width">
            <div className="footer-logo">
                <img src={logo} alt="footer logo" />
            </div>
            <div className="contact text-max">
                <h3>CONTACT</h3>
                <ul>
                    <p className='tel'>Contact Tel: +44 (0)121 605 5555</p>
                    <li>
                    General Enquiries
                    </li>
                    <li>
                    Complaints & Concerns
                    </li>
                    <li>
                    Media Enquiries
                    </li>
                    <li>Privacy Statement</li>
                </ul>
            </div>
            <div className="address text-max">
                <h3>ADDRESS</h3>
                <p>
                    Islamic Relief Worldwide
                    19 Rea St South Digbeth
                    Birmingham, B5 6LB
                    United Kingdom
                </p>
            </div>
            <div className="follow text-max">
                <h3>FOLLOW US</h3>
                <div className="icons">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </div>
            </div>
            </div>
        </div>
        <div className="foot">
            <div className="foot-items max-width">
            {
                list.map(item => {
                    return (
                        <div className='foot-item' key={item.id}>
                            {
                                media ?
                                <ul>
                                    <h3>{item.title}</h3>
                                    <li>
                                        {item.list1}
                                    </li>
                                    <li>
                                        {item.list2}
                                    </li>
                                    <li>
                                        {item.list3}
                                    </li>
                                </ul>
                             : 


                            <details>
                                <summary>{item.title}</summary>
                                <p>{item.list1}</p>
                                <p>{item.list1}</p>
                                <p>{item.list1}</p>
                                <p>{item.list1}</p>
                            </details>
                            }
                        </div>
                    )
                })
            }
            </div>
        </div>
    </footer>
  )
}

export default Footer