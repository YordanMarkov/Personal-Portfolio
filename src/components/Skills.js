import './Skills.css';
import codeIcon from '../images/code.svg';
import webIcon from '../images/web.svg';
import databaseIcon from '../images/database.svg';
import designIcon from '../images/design.svg';
import frameworkIcon from '../images/framework.svg';

function Skills() {
  return (
    <section id="skills" className="about-section skills-section">
      <h1 className="skills-title">My skills</h1>
      <div className="skills-container">

        <div className="skill-category">
          <div className="skill-category-header">
            <img src={codeIcon} className="skill-icon" alt="Code"/>
            <span className="skill-category-title">Programming Languages</span>
          </div>
          <div className="skill-tags">
            <span className="tag">Python</span>
            <span className="tag">Java</span>
            <span className="tag">C</span>
            <span className="tag">C++</span>
            <span className="tag">Swift</span>
            <span className="tag">JavaScript</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-category-header">
            <img src={frameworkIcon} className="skill-icon" alt="Frameworks"/>
            <span className="skill-category-title">Frameworks & Libraries</span>
          </div>
          <div className="skill-tags">
            <span className="tag">React.js</span>
            <span className="tag">Node.js</span>
            <span className="tag">Vue.js</span>
            <span className="tag">SwiftUI</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-category-header">
            <img src={webIcon} className="skill-icon" alt="Web"/>
            <span className="skill-category-title">Web Development</span>
          </div>
          <div className="skill-tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">RESTful APIs</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-category-header">
            <img src={designIcon} className="skill-icon" alt="Design"/>
            <span className="skill-category-title">Design Tools</span>
          </div>
          <div className="skill-tags">
            <span className="tag">Figma</span>
            <span className="tag">Adobe Photoshop</span>
            <span className="tag">Adobe Illustrator</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-category-header">
            <img src={databaseIcon} className="skill-icon" alt="Database"/>
            <span className="skill-category-title">Databases</span>
          </div>
          <div className="skill-tags">
            <span className="tag">MySQL</span>
            <span className="tag">MSSQL</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;