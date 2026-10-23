import { platforms } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Platforms() {
  return (
    <section className="section platforms-section container" id="platforms" aria-labelledby="platforms-title">
      <SectionHeading number="03" label="TECHNOLOGIES" title="Platforms & Solutions" id="platforms-title" />
      <p className="section-lead">Technologies I’ve worked with across client environments and internal IT operations, supporting daily administration, troubleshooting, deployments, and migrations.</p>
      <div className="platform-grid">
        {platforms.map((group) => (
          <article className="platform-card" key={group.id} aria-labelledby={`platform-${group.id}`}>
            <h3 id={`platform-${group.id}`}>{group.title}</h3>
            <ul className="tags platform-tags">
              {group.solutions.map((solution) => <li key={solution}>{solution}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
