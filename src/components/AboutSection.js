import './AboutSection.css';
import AboutIntro from './AboutIntro';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import EmailContact from './EmailContact';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import instagram from '../images/instagram.svg';

export default function AboutSection() {
  return (
    <div id="about" className="about">
      <div className="about-opening">
        <AboutIntro />
        <div className="about-icons">
          <a href="https://www.linkedin.com/in/yordan-markov/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="https://github.com/YordanMarkov" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
          <a href="https://www.instagram.com/markovyordan" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a>
          <EmailContact />
        </div>
      </div>
      <Education />
      <Skills />
      <Experience />
    </div>
  );
}
