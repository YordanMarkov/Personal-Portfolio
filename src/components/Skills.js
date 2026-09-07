import './Skills.css';

const categories = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Swift', 'C', 'C++'] },
  { title: 'Web & mobile', items: ['React', 'Next.js', 'Node.js', 'Vue.js', 'SwiftUI', 'HTML', 'CSS', 'REST APIs'] },
  { title: 'Data & visualization', items: ['D3.js', 'MySQL', 'Microsoft SQL Server', 'Mermaid'] },
  { title: 'Design & research', items: ['Figma', 'UX research', 'Prototyping', 'Usability testing', 'Double Diamond', 'Photoshop', 'Illustrator'] },
  { title: 'Software quality & delivery', items: ['Git', 'GitHub Actions', 'Vitest', 'CI/CD', 'Requirements engineering', 'C4 modeling'] },
  { title: 'AI applications', items: ['OpenAI API', 'Structured outputs', 'Zod validation', 'Multi-step pipelines'] },
];

export default function Skills() {
  return (
    <section id="skills" className="about-section skills-section">
      <h2 className="skills-title">My skills</h2>
      <p className="about-section-lead">Tools and methods I have used across my studies, internships, and personal projects.</p>
      <div className="skills-container">
        {categories.map(category => (
          <article className="skill-category" key={category.title}>
            <h3>{category.title}</h3>
            <div className="skill-tags">{category.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

