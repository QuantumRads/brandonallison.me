import { useTheme } from './hooks/useTheme.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Expertise from './components/Expertise.jsx';
import Platforms from './components/Platforms.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1}><Hero /><About /><Expertise /><Platforms /><Experience /><Projects /><Certifications /><Education /><Contact /></main>
      <Footer />
    </>
  );
}
