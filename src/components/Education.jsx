import { education } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

export default function Education() {
  return (
    <section className="section education-section container" id="education" aria-labelledby="education-title">
      <SectionHeading number="07" label="EDUCATION" title="Where the groundwork started." id="education-title" />
      <article className="education-card">
        <span className="capability-icon"><Icon name="book" size={22} /></span>
        <p className="eyebrow">EDUCATION / {education.completed}</p>
        <h3>{education.degree}</h3>
        <p className="education-program">{education.program}</p>
        <p>{education.school}</p>
      </article>
    </section>
  );
}
