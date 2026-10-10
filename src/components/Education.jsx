import { credentials, education, microsoftFoundations } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

export default function Education() {
  return (
    <section className="section education-section container" id="education" aria-labelledby="education-title">
      <SectionHeading number="05" label="FOUNDATIONS" title="Where the groundwork started." id="education-title" />
      <div className="education-grid">
        <article className="education-card">
          <span className="capability-icon"><Icon name="book" size={22} /></span>
          <p className="eyebrow">EDUCATION / {education.completed}</p>
          <h3>{education.degree}</h3>
          <p className="education-program">{education.program}</p>
          <p>{education.school}</p>
        </article>
        <article className="education-card credential-card">
          <p className="eyebrow">EARLY CERTIFICATIONS</p>
          <h3>Infrastructure & security fundamentals</h3>
          <ul className="credential-list">
            {credentials.map((credential) => <li key={credential.title}><strong>{credential.title}</strong><span>First earned {credential.earned}</span></li>)}
          </ul>
          <div className="mta-foundations"><strong>Microsoft Technology Associate</strong><p>Fundamentals credentials in {microsoftFoundations.join(', ').toLowerCase()}.</p></div>
        </article>
      </div>
    </section>
  );
}
