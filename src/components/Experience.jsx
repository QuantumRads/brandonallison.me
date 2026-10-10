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
              <span className={`role-period${role.current ? ' active-period' : ''}`}>{role.period}{role.periodLabel && ` · ${role.periodLabel}`}</span>
              <h3>{role.title}</h3>
              <p className="experience-company">{role.company}</p>
              {role.companyHistory && (
                <div className="company-history">
                  <p className="company-history-label">COMPANY NAME HISTORY</p>
                  <ul className="company-history-list" aria-label="Company name history">
                    {role.companyHistory.map((company) => <li key={company.name}><strong>{company.name}</strong><span>{company.period}</span></li>)}
                  </ul>
                </div>
              )}
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
