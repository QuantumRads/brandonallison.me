import { profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

export default function Contact() {
  return (
    <section className="contact-section container" id="contact" aria-labelledby="contact-title">
      <div className="contact-card">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-copy">
          <p className="eyebrow"><span className="section-number">03</span>CONTACT</p>
          <h2 id="contact-title">Let's connect<span>.</span></h2>
          <p>Follow along, explore the code,<br className="desktop-break" /> and see what's next.</p>
        </div>
        <a className="button button-primary" href={profile.github}>
          <Icon name="github" size={19} />Find me on GitHub<Icon name="arrow" size={18} />
        </a>
      </div>
    </section>
  );
}
