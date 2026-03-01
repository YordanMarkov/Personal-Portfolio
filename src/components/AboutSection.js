import './AboutSection.css';
import Portrait from '../images/Portrait.jpg';
import AboutIntro from './AboutIntro';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import linkedin from '../images/linkedin.svg';
import instagram from '../images/instagram.svg';
import phone from '../images/phone.svg';
import mail from '../images/mail.svg';
import React, { useEffect, useCallback, useRef, useState } from "react";

function AboutSection() {
  const [activeSection, setActiveSection] = useState('about-intro');
  const sections = ['about-intro', 'education', 'skills', 'experience'];
  const sectionIndex = useRef(0);
  const isScrolling = useRef(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSection = (targetIndex) => {
    if (isTransitioning || targetIndex === sectionIndex.current) return;

    setIsTransitioning(true);
    const nextSection = sections[targetIndex];
    setActiveSection(nextSection);

    setTimeout(() => {
      sectionIndex.current = targetIndex;
      setIsTransitioning(false);
    }, 500);
  };

  const handleWheel = useCallback((e) => {
    if (isScrolling.current || isTransitioning) return;

    isScrolling.current = true;
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = Math.min(
      Math.max(sectionIndex.current + direction, 0),
      sections.length - 1
    );

    changeSection(nextIndex);

    setTimeout(() => {
      isScrolling.current = false;
    }, 100);
  }, [isTransitioning]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const renderSections = () => (
    <>
      {sections.map((section) => (
        <div
          key={section}
          className={`section-wrapper ${
            activeSection === section ? 'fade-in' : 'fade-out'
          }`}
        >
          <div className="section-inner">
            {section === 'about-intro' && <AboutIntro />}
            {section === 'education' && <Education />}
            {section === 'skills' && <Skills />}
            {section === 'experience' && <Experience />}
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section id="about" className="about">

      <div className="about-content">{renderSections()}</div>

      <div className="about-left">
        <div className="about-dots">
          {sections.map((section, index) => (
            <span
              key={section}
              className={`about-dot ${activeSection === section ? 'active' : ''}`}
              onClick={() => changeSection(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="about-right">
        <img src={Portrait} alt="Portrait" className="about-portrait" />
        <div className="about-icons">
          <a href="https://www.linkedin.com/in/yordan-markov" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/markovyordan" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="tel:+359882064129">
            <img src={phone} alt="Phone" />
          </a>
          <a href="mailto:yordanmarkov2004@gmail.com">
            <img src={mail} alt="Email" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
