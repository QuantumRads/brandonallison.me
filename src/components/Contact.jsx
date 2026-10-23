import { profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

export default function Contact() {
  return (
    <section className="contact-section container" id="contact" aria-labelledby="contact-title">
      <div className="contact-card">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-copy">
          <p className="eyebrow"><span className="section-number">08</span>CONTACT</p>
          <h2 id="contact-title">Let's connect<span>.</span></h2>
          <p>Get in touch or explore what I'm working on.</p>
        </div>
        <div className="contact-links">
          <a className="button button-quiet" href={`mailto:${profile.email}`}><Icon name="mail" size={19} />Email me<Icon name="arrow" size={18} /></a>
          <a className="button button-primary" href={profile.linkedin}><Icon name="linkedin" size={19} />LinkedIn<Icon name="arrow" size={18} /></a>
          <a className="button button-quiet" href={profile.github}><Icon name="github" size={19} />GitHub / {profile.handle}<Icon name="arrow" size={18} /></a>
        </div>
      </div>
    </section>
  );
}
