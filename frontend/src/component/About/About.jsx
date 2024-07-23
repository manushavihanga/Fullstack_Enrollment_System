import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-header'>
        <h1>About Our Institute</h1>
      </div>
      <section className='about-content'>
        <p>
          Established on January 15, 2000, our institute was founded with a steadfast commitment to providing exceptional education and training. From the outset, we have aimed to empower students to excel in their professional journeys by cultivating an environment that nurtures intellectual growth, fosters critical thinking, and upholds the highest ethical standards.
        </p>
        <p>
          Over the years, our institute has garnered a distinguished reputation for excellence and innovation in education. We take pride in having graduated over 10,000 successful professionals who have made significant contributions to their respective fields. Our achievements reflect our dedication to quality education, including receiving the prestigious National Education Excellence Award in 2015. We have forged partnerships with more than 50 international universities, facilitating global academic exchanges and enriching our educational programs. Additionally, our faculty members have published over 500 research papers in esteemed journals, contributing to advancements in various disciplines.
        </p>
        <p>
          One of our hallmarks is our outstanding job placement record, with a commendable 90% of our graduates securing employment within 6 months of graduation. This success underscores our commitment to preparing students not only academically but also professionally for the challenges of today's competitive job market.
        </p>
      </section>
    </div>
  );
}

export default About;
