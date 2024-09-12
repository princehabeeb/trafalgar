import React from 'react';
import '../styles/Services.css';

const allBox = [
  {
    icon: '/images/search.png',
    title: 'Search doctor',
    desc: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
  },
  {
    icon: '/images/search.png',
    title: 'Online pharmacy',
    desc: 'Buy  your medicines with our mobile application with a simple delivery system'
  },
  {
    icon: '/images/search.png',
    title: 'Consultation',
    desc: 'Free consultation with our trusted doctors and get the best recomendations'
  },
  {
    icon: '/images/search.png',
    title: 'Details info',
    desc: 'Free consultation with our trusted doctors and get the best recomendations'
  },
  {
    icon: '/images/search.png',
    title: 'Emergency care',
    desc: 'You can get 24/7 urgent care for yourself or your children and your lovely family'
  },
  {
    icon: '/images/search.png',
    title: 'Tracking',
    desc: 'Track and save your medical history and health data '
  },
];

const Services = () => {
  return (
    <section className='services'>
      <div className='container'>
        <h1 className='services-h1'>Our services</h1>
        <p className='services-p'>
          We provide to you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with
          <br /> our highly qualified doctors. You can consult with us which type of service is suitable for your health.
        </p>

        <div className='boxes'>
          {allBox.map(({ icon, title, desc }, index) => (
            <div className='box' key={index}>
              <img src={icon} alt={title} />
              <h2>{title}</h2>
              <h6>{desc}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
