import React, { useEffect } from 'react'
import '../style/journey.css'
import AOS from "aos";
import "aos/dist/aos.css";
function Journey() {

     useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <div className='journey-container'>
        <h1 className='head'>Journey</h1>

        <div className='sub-container'>
            <div className='cell' data-aos="fade-up">
                <h1 className='title'>Start</h1>
                <h3  className='sub-title'>August 14, 2025</h3>
                <div className='text'>
                    <p>It was a beautiful evening for us. That night, we were just complete strangers. Alex joined Jethro’s party lobby in Valorant,
                       and that was the beginning of our story. We played until midnight, our laughter filling the game like background music to something new and special. 
                      When the match ended, we exchanged Discord usernames, a small gesture that felt like the start of something unforgettable
                    </p>
                </div>
            </div>

            <div className='cell' data-aos="fade-up">
                <h1 className='title'>Getting to know each other</h1>
                <h3 className='sub-title'>August 20, 2025</h3>
                <div className='text'>
                    <p>As time went by, we got to know each other through online games and late-night conversations. Even though we were miles apart, the distance never stopped us from growing closer. Despite everything, we still found a way to truly understand each other.
                    </p>
                </div>
            </div>

            <div className='cell' data-aos="fade-up">
                <h1 className='title'>The Moment She Confessed</h1>
                <h3 className='sub-title'>Nov 11, 2025</h3>
                <div className='text'>
                    <p>The moment she confessed her feelings, my world felt different.
                    </p>
                </div>
            </div>

            <div className='cell' data-aos="fade-up">
                <h1 className='title'>The first time we met up felt unreal.</h1>
                <h3 className='sub-title'>Dec 18, 2025</h3>
                <div className='text'>
                    <p>From Bacolod to Manila, we traveled not just for the distance, but for love. We went to different places, holding onto every moment, knowing it might take a long time before we could be together like that again.
                    </p>
                </div>
            </div>

            <div className='cell' data-aos="fade-up">
                <h1 className='title'>To be continue</h1>
                <h3 className='sub-title'>August 21, 2025</h3>
                <div className='text'>
                    <p>To be continue</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Journey
