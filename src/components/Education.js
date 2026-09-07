import './Education.css';
import educationIcon from '../images/education.svg';

const education = [
  { school: 'Eindhoven University of Technology', course: 'Pre-master - Computer Science and Engineering', date: 'Sep 2026 - Jan 2027 (expected)', text: 'Currently studying algorithms, data structures, discrete mathematics, logic, calculus, and formal computer science.' },
  { school: 'Fontys University of Applied Sciences', course: 'ICT - Software, mobile, and media design', date: '2023 - Present', text: 'Completed ICT & Complex Software Systems (Feb - Jun 2026), following an internship semester, ICT & Smart Mobile, and ICT & Media Design. Obtained my propaedeutic diploma.' },
  { school: 'Technology School Electronic Systems (TUES)', course: 'Secondary education - System Programming', date: 'Sep 2018 - May 2023 - Sofia, Bulgaria', text: 'High school diploma with a professional qualification in System Programming.' },
];

export default function Education() {
  return (
    <section id="education" className="about-section education-section">
      <h2 className="education-title">Education</h2>
      {education.map(item => (
        <article className="education-item" key={item.school}>
          <img src={educationIcon} alt="" className="education-icon" />
          <div className="education-content">
            <span className="education-date">{item.date}</span>
            <h3>{item.school}</h3><h4>{item.course}</h4><p>{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

