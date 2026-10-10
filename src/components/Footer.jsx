import { profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

export default function Footer() {
  return <footer className="site-footer container"><p>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}</p><span className="footer-domain">{profile.domain}</span><a href="#home">Back to top <Icon name="up" size={13} /></a></footer>;
}
