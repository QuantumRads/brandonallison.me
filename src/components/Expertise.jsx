import { capabilities } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

export default function Expertise() {
  return (
    <section className="section expertise-section container" id="expertise" aria-labelledby="expertise-title">
      <div className="section-title-row">
        <SectionHeading number="02" label="EXPERTISE" title="The work I take on." id="expertise-title" />
        <span className="section-aside">Client environments + internal operations</span>
      </div>
      <div className="capability-grid">
        {capabilities.map((capability) => (
          <article className="capability-card" key={capability.id}>
            <span className="capability-icon"><Icon name={capability.icon} size={22} /></span>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <ul className="tags" aria-label="Areas of focus">
              {capability.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
