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
        <span className="plate-label">PERSONAL SPACE / 001</span>
        <span className="plate-monogram">ba<span>.</span></span>
        <span className="plate-footer">
          {profile.firstName.toUpperCase()} {profile.lastName.toUpperCase()}
          <Icon name="arrow" size={16} />
        </span>
      </div>
      <div className="art-chip code-chip">
        <span className="chip-icon"><Icon name="code" size={18} /></span>
        <div><strong>Made to evolve</strong><span>One idea at a time</span></div>
      </div>
      <div className="art-chip name-chip"><span className="chip-dot" />{profile.domain}</div>
      <span className="art-coordinate coordinate-top">BA — 01</span>
      <span className="art-coordinate coordinate-bottom">A WORK IN PROGRESS</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="blue-dot" />PERSONAL PORTFOLIO<span className="version">V.02</span>
        </p>
        <h1 id="hero-title">{profile.firstName}<br /><span>{profile.lastName}.</span></h1>
        <p className="hero-description">{profile.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <Icon name="arrow" size={18} /></a>
          <a className="button button-quiet" href="#about">A little about me <Icon name="down" size={16} /></a>
        </div>
        <a className="hero-social" href={profile.github}>
          <Icon name="github" size={18} /><span>{profile.handle}</span>
          <span className="social-rule" /><span className="social-caption">Find me on GitHub</span>
        </a>
      </div>
      <IdentityArtwork />
      <div className="hero-bottom">
        <span>PROJECTS. EXPERIMENTS. POSSIBILITIES.</span>
        <a href="#projects">Keep exploring <Icon name="down" size={13} /></a>
      </div>
    </section>
  );
}
