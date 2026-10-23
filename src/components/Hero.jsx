import { profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';
import headshot from '../assets/brandon-allison.webp?inline';

export default function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span className="blue-dot" />{profile.title.toUpperCase()} / {profile.company.toUpperCase()}</p>
        <h1 id="hero-title">{profile.firstName}<br /><span>{profile.lastName}.</span></h1>
        <p className="hero-description">{profile.intro}</p>
        <ul className="hero-specialties" aria-label="Current areas of focus"><li>Networks</li><li>Microsoft 365</li><li>Azure</li><li>Intune</li></ul>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <Icon name="arrow" size={18} /></a>
          <a className="button button-quiet" href="#experience">My experience <Icon name="down" size={16} /></a>
        </div>
        <a className="hero-social" href={profile.github}><Icon name="github" size={18} /><span>{profile.handle}</span><span className="social-rule" /><span className="social-caption">Find me on GitHub</span></a>
      </div>
      <div className="hero-portrait">
        <img src={headshot} alt={`${profile.firstName} ${profile.lastName}`} width={840} height={840} decoding="async" fetchPriority="high" />
      </div>
      <div className="hero-bottom"><span>NETWORKS. CLOUD. SYSTEMS. OPERATIONS.</span><a href="#about">The work behind the title <Icon name="down" size={13} /></a></div>
    </section>
  );
}
