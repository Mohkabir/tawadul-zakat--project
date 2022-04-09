import React from 'react'

import mission from '../../assets/img/mission.jpg'

const Mission = () => {
  return (
    <section className='mission'
    style={{
        backgroundColor: 'transparent',
        backgroundImage: `url(${mission})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }}>
        <div className="mission-text container">
            <h1>
                IRW MISSION
            </h1>
            <h3>
            LOCATIONS WORLD WIDE
            </h3>
            <button>
                DONATE NOW
            </button>
        </div>
    </section>
  )
}

export default Mission