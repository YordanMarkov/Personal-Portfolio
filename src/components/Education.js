import './Education.css';
import educationIcon from '../images/education.svg';

function Education() {
  return (
    <section id="education" className="about-section education-section">
      <h1 className="education-title">Education</h1>
      <div className="education-item">
        <img src={educationIcon} alt="Education Icon" className="education-icon"/>
        <div className="education-content">
          <h2>Fontys University of Applied Sciences</h2>
          <span className="education-date">2023 – Present, Eindhoven, Netherlands</span>
          <p>
            Obtained propaedeutic diploma.<br/>
            Studied ICT & Media Design, currently studying ICT & Smart Mobile.
          </p>
        </div>
      </div>

      <div className="education-item">
        <img src={educationIcon} alt="Education Icon" className="education-icon"/>
        <div className="education-content">
          <h2>Technological School "Electronic Systems"</h2>
          <span className="education-date">2018 – 2023, Sofia, Bulgaria</span>
          <p>
            Obtained diploma for secondary education with a professional qualification in System Programming.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;