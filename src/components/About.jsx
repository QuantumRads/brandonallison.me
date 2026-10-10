import { profile } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

export default function About() {
  return (
    <section className="section about-section container" id="about" aria-labelledby="about-title">
      <div><SectionHeading number="01" label="ABOUT" title={<>From the client ticket<br />to the network design.</>} id="about-title" /><p className="section-lead">A broad role. Hands-on responsibility.</p></div>
      <div className="about-content">
        <p className="about-intro">{profile.about}</p>
        <p>{profile.aboutNote}</p>
        <div className="currently"><span className="currently-icon"><Icon name="network" size={19} /></span><div><span className="eyebrow">CURRENT ROLE</span><strong>{profile.title} at {profile.company}</strong></div></div>
      </div>
    </section>
  );
}
