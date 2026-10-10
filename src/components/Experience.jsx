import { experience } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Experience() {
  return (
    <section className="section experience-section container" id="experience" aria-labelledby="experience-title">
      <SectionHeading number="03" label="EXPERIENCE" title="Hands-on, across the stack." id="experience-title" />
      <div className="experience-list">
        {experience.map((role) => (
          <article className={`experience-card${role.current ? ' current-role' : ''}`} key={role.id}>
            <div className="experience-role">
              <span className={`role-period${role.current ? ' active-period' : ''}`}>{role.period}</span>
              <h3>{role.title}</h3>
              <p className="experience-company">{role.company}</p>
            </div>
            <div className="experience-detail">
              <p>{role.summary}</p>
              <ul>{role.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
