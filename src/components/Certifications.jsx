import { certifications } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

const groups = [
  { issuer: 'CompTIA', title: 'CompTIA', label: 'IT SUPPORT, NETWORKING & SECURITY' },
  { issuer: 'Microsoft', title: 'Microsoft Certifications', label: 'AZURE & TECHNOLOGY FUNDAMENTALS' },
];

export default function Certifications() {
  return (
    <section className="section certifications-section container" id="certifications" aria-labelledby="certifications-title">
      <SectionHeading number="06" label="CERTIFICATIONS" title="A foundation in infrastructure & security." id="certifications-title" />
      <p className="section-lead">Certifications earned across IT support, networking, systems administration, cloud, and security.</p>
      <div className="certification-grid">
        {groups.map((group) => (
          <article className="certification-card" key={group.issuer} aria-labelledby={`certifications-${group.issuer.toLowerCase()}`}>
            <div className="certification-card-heading">
              <span className="capability-icon"><Icon name="award" size={23} /></span>
              <div>
                <p className="eyebrow">{group.label}</p>
                <h3 id={`certifications-${group.issuer.toLowerCase()}`}>{group.title}</h3>
              </div>
            </div>
            <ul className="certification-list">
              {certifications.filter((certification) => certification.issuer === group.issuer).map((certification) => (
                <li key={certification.id}>
                  <strong>{certification.title}</strong>
                  {certification.earned && <span>First earned {certification.earned}</span>}
                  {certification.verificationUrl && <a className="text-link" href={certification.verificationUrl} target="_blank" rel="noopener noreferrer">Verify on Microsoft Learn <Icon name="arrow" size={14} /></a>}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
