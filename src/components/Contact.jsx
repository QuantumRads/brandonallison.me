import { profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

export default function Contact() {
  return (
    <section className="contact-section container" id="contact" aria-labelledby="contact-title">
      <div className="contact-card">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-copy"><p className="eyebrow"><span className="section-number">07</span>CONTACT</p><h2 id="contact-title">Let's connect<span>.</span></h2><p>Find me online and explore<br className="desktop-break" /> what I'm working on.</p></div>
        <a className="button button-primary" href={profile.github}><Icon name="github" size={19} />GitHub / {profile.handle}<Icon name="arrow" size={18} /></a>
      </div>
    </section>
  );
}
