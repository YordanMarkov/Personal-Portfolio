import './Experience.css';
import workIcon from '../images/work.svg';

const experience = [
  { role: 'Software Engineering Internship: EUV Source Portal Creation', company: 'ASML', date: 'Sep 2025 - Jan 2026 - Veldhoven', points: ['Developed an internal tool using Next.js, React, and D3.js, with a focus on usability and clear interaction design.', 'Parsed files using Python and JavaScript to structure data for visualization with D3.js.', 'Researched user needs and refined Figma designs through feedback from stakeholders and UX colleagues.', 'Prepared documentation and handed over the work at the end of the internship.'] },
  { role: 'Student Assistant', company: 'Fontys ICT', date: 'Sep 2024 - Nov 2024 - Eindhoven', points: ['Helped students navigate their studies and work through technical problems.', 'Explained concepts and proposed solutions for Python, HTML, CSS, and networking questions.', 'Supported learning through practical guidance and clear communication.'] },
  { role: 'Intern', company: 'Haemimont AD', date: 'Aug 2022 - Sep 2022 - Sofia', points: ['Learned to develop web applications using Vue.js and JavaScript.', 'Implemented interfaces based on designs provided by a colleague.', 'Communicated with that colleague to translate the designs into working pages.'] },
  { role: 'Intern', company: 'Step-Soft', date: 'Jul 2022 - Sofia', points: ['Developed and maintained databases using Microsoft SQL Server.', 'Wrote queries to retrieve and organize information from those databases.', 'Gained practical experience working with relational data in a professional setting.'] },
  { role: 'Designer', company: 'Hack TUES & TUES Fest', date: 'Aug 2021 - Jul 2022 - Sofia', points: ['Designed event materials, including T-shirts, posters, pens, and cups.', 'Created social media posts and videos to support the events.', 'Arranged products and visual materials for a consistent presentation at the events.'] },
];

export default function Experience() {
  return (
    <section id="experience" className="about-section experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experience.map(item => (
          <article className="experience-item" key={item.company}>
            <img src={workIcon} alt="" className="experience-icon" />
            <div className="experience-details">
              <span className="experience-date">{item.date}</span>
              <h3>{item.role}</h3><h4>{item.company}</h4>
              <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

