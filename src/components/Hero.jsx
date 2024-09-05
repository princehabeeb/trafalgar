import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
        <div className="dots">
            <img src="/images/dots.png" alt="" />
        </div>
        <div className='hero-text'>
            <h1>Virtual healthcare for you</h1>
            <p>Trafalgar provides progressive, and affordable 
                <br />
             healthcare, accessible on mobile and online 
             <br />
             for everyone</p>
            <button className='btn-a'>Consult today</button>
        </div>
        <div className='hero-img'>
            <img src="/images/illustration.png" alt="" />
        </div>
    </section>
  )
}

export default Hero