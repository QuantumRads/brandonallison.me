import { profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

function IdentityArtwork() {
  return (
    <div className="identity-art" aria-hidden="true">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-glow" />
      <div className="art-plate plate-back" />
      <div className="art-plate plate-middle" />
      <div className="art-plate plate-front">
        <span className="plate-label">NETWORKS / CLOUD / SYSTEMS</span>
        <span className="plate-monogram">ba<span>.</span></span>
        <span className="plate-footer">
          {profile.firstName.toUpperCase()} {profile.lastName.toUpperCase()}
          <Icon name="arrow" size={16} />
        </span>
      </div>
      <div className="art-chip code-chip">
        <span className="chip-icon"><Icon name="network" size={18} /></span>
        <div><strong>{profile.title}</strong><span>{profile.company} / Managed services</span></div>
      </div>
      <div className="art-chip name-chip"><span className="chip-dot" />{profile.domain}</div>
      <span className="art-coordinate coordinate-top">INFRASTRUCTURE / OPERATIONS</span>
      <span className="art-coordinate coordinate-bottom">FROM DESIGN TO DAILY SUPPORT</span>
    </div>
  );
}

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
      <IdentityArtwork />
      <div className="hero-bottom"><span>NETWORKS. CLOUD. SYSTEMS. OPERATIONS.</span><a href="#about">The work behind the title <Icon name="down" size={13} /></a></div>
    </section>
  );
}
