import { profile } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

export default function About() {
  return (
    <section className="section about-section container" id="about" aria-labelledby="about-title">
      <SectionHeading number="01" label="ABOUT" title={<>A little curiosity.<br />A lot of possibility.</>} id="about-title" />
      <div className="about-content">
        <p className="about-intro">{profile.about}</p>
        <p>{profile.aboutNote}</p>
        <div className="currently">
          <span className="currently-icon"><Icon name="code" size={19} /></span>
          <div><span className="eyebrow">RIGHT NOW</span><strong>Building my own corner of the web.</strong></div>
        </div>
      </div>
    </section>
  );
}
