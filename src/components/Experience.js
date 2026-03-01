import './Experience.css';
import workIcon from '../images/work.svg';

function Experience() {
  return (
    <section id="experience" className="about-section experience-section">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-container">

        <div className="experience-item">
          <img src={workIcon} alt="Work Icon" className="experience-icon"/>
          <div className="experience-details">
            <h2>Student assistant</h2>
            <h3>Fontys ICT</h3>
            <span className="experience-date">Sep 2024 – Oct 2024</span>
            <ul>
              <li>Helping the students navigate their studies and problems.</li>
              <li>Proposing solutions for Python, HTML, CSS and Networking queries.</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <img src={workIcon} alt="Work Icon" className="experience-icon"/>
          <div className="experience-details">
            <h2>Intern</h2>
            <h3>Step-Soft</h3>
            <span className="experience-date">Jul 2022 – Jul 2022</span>
            <ul>
              <li>Develop and maintain several databases using MSSQL.</li>
              <li>Develop queries to gather information from the databases.</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <img src={workIcon} alt="Work Icon" className="experience-icon"/>
          <div className="experience-details">
            <h2>Designer</h2>
            <h3>Hack TUES & TUES Fest</h3>
            <span className="experience-date">Aug 2021 – Jul 2022</span>
            <ul>
              <li>Create materials such as T-shirts, posters, pens, cups for events.</li>
              <li>Create social media posts and videos for events.</li>
              <li>Arrange the products aesthetically for events.</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <img src={workIcon} alt="Work Icon" className="experience-icon"/>
          <div className="experience-details">
            <h2>Intern</h2>
            <h3>Haemimont AD</h3>
            <span className="experience-date">Aug 2021 – Sep 2021</span>
            <ul>
              <li>Learn how to develop web apps using Vue.js.</li>
              <li>Communicate with a colleague, following their designs.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
