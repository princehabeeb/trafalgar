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
    title: 'Search doctor',
    desc: 'Choose your doctor from  thousands of specialist,  general, and trusted  hospitals'
  },
  {
    icon: '/images/search.png',
    title: 'Search doctor',
    desc: 'Choose your doctor from  thousands of specialist,  general, and trusted  hospitals'
  },
  {
    icon: '/images/search.png',
    title: 'Search doctor',
    desc: 'Choose your doctor from  thousands of specialist,  general, and trusted  hospitals'
  },
  {
    icon: '/images/search.png',
    title: 'Search doctor',
    desc: 'Choose your doctor from  thousands of specialist, general, and trusted  hospitals'
  },
  {
    icon: '/images/search.png',
    title: 'Search doctor',
    desc: 'Choose your doctor from  thousands of specialist, general, and trusted hospitals'
  },
]

const Services = () => {
  return (
    <section className='services'>
      <div className='container'>
        <h1 className='services-h1'>Our services</h1>
        <p className='services-p'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with <br /> our highly qualified doctors you can consult with us which type of service is suitable for your health</p>

      <div className='boxes'>
     { 
     allBox.map((icon, title, desc)  => (
      <div className="box">
      <img src={icon} alt={title} />
      <h2>{title}</h2>
      <h6>{desc}</h6>
    </div>
     )
     )
     }
       </div>
      </div>
    </section>
  )
}

export default Services