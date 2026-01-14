import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


import Cute from '../assets/cute.jpg'
import Epic from '../assets/epic.jpg'
import LiveValo from '../assets/liveValo.jpg'
import Val1 from '../assets/val1.jpg'
import Roblox from '../assets/roblox.jpg'
import Call from '../assets/callF2f.jpg'
import Coding from '../assets/coding.jpg'
import Pretty from '../assets/prettyAlex.jpg'
import Biscop from '../assets/withBiscop.jpg'
import Eight from '../assets/Eight.jpg'
import Seven from '../assets/seven.jpg'
import Six from '../assets/six.jpg'
import Three from '../assets/three.jpg'
import Two from '../assets/two.jpg'
import Nine from '../assets/nine.jpg'
import One from '../assets/one.jpg'
import Photo from '../assets/photo.jpg'
import Five from '../assets/five.jpg'
import Four from '../assets/four.jpg'

import '../style/moments.css'

function Moments() {
   useEffect(() => {
    AOS.init({
  duration: 600,   // lower = smoother
  easing: 'ease-out-cubic',
  once: true,      // animate only once
});

  }, []);
  
  const moments = [
  { image: Cute, description: "Playing Valorant with a cat crosshair", date: "August 31, 2025" },
  { image: Epic, description: "Watching epic shows together", date: "September 4, 2025" },
  { image: LiveValo, description: "She watched my Valorant gameplay", date: "September 16, 2025" },
  { image: Val1, description: "We dated through playing Valorant", date: "September 16, 2025" },
  { image: Roblox, description: "We played an obby in Roblox", date: "September 16, 2025" },
  { image: Call, description: "Getting to know each other through calls and our first open cam", date: "September 17, 2025" },
  { image: Coding, description: "Teaching her how to code", date: "September 18, 2025" },
  { image: Pretty, description: "Cute moments together", date: "September 19, 2025" },
  { image: Biscop, description: "Biscoff picture", date: "September 21, 2025" },
  { image: Three, description: "Our first night together", date: "December 18, 2025" },
  { image: Two, description: "A low-key picture", date: "December 19, 2025" },
  { image: One, description: "We went to Gateway Mall", date: "December 19, 2026" },
  { image: Photo, description: "Our first photobooth", date: "December 19, 2025" },
  { image: Six, description: "Christmas party with a Coachella theme and a doggo", date: "December 20, 2025" },
  { image: Five, description: "Ninong and Ninang moment", date: "December 21, 2025" },
  { image: Four, description: "Going home with a flower", date: "December 21, 2025" },
  { image: Nine, description: "Lugaw date", date: "December 22, 2025" },
  { image: Seven, description: "Fairview date", date: "December 23, 2025" },
  { image: Eight, description: "Our last day before the flight", date: "December 24, 2025" },


  ]

  return (
    <div className='Moments'>
      <h1>Moments</h1>
      <div data-aos="fade-up" className='moments-container'>
          {moments.map((element, index)=>(
                          <div
                className='card-div'
                key={index}
                style={{
                  backgroundImage: `url(${element.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "250px",
                  height: "250px",
                }}
              >
               <div className='info-card'>
                   <h3>{element.date}</h3>
                   <p>{element.description}</p>
               </div>
        </div>
          ))}
      </div>
    </div>
  )
}

export default Moments
