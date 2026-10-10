import { profile, projects } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-visual" aria-hidden="true">
        <span className="visual-grid" />
        <div className="mini-browser">
          <div className="mini-toolbar">
            <span className="window-dots"><i /><i /><i /></span>
            <span>{profile.domain}</span><Icon name="arrow" size={10} />
          </div>
          <div className="mini-page">
            <span className="mini-kicker">PERSONAL PORTFOLIO</span>
            <span className="mini-title">{profile.firstName}<br /><em>{profile.lastName}.</em></span>
            <span className="mini-button">Explore my work <Icon name="arrow" size={9} /></span>
            <span className="mini-orb" />
          </div>
        </div>
        <span className="visual-label">DESIGNED TO BE PERSONAL.</span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{String(index + 1).padStart(2, '0')} / {project.category.toUpperCase()}</span>
          <span className="status-pill"><span />{project.status}</span>
        </div>
        <h3><a href={project.href}>{project.title}<Icon name="arrow" size={23} /></a></h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Technologies">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section projects-section container" id="projects" aria-labelledby="projects-title">
      <div className="section-title-row">
        <SectionHeading number="02" label="PROJECTS" title="Ideas taking shape." id="projects-title" />
        <a className="text-link" href={`${profile.github}?tab=repositories`}>All repositories <Icon name="arrow" size={16} /></a>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        <article className="next-project">
          <div className="next-icon"><Icon name="plus" size={26} /></div>
          <p className="eyebrow">THE NEXT CHAPTER</p>
          <h3>More to come.</h3>
          <p>New projects and experiments<br />will find their home here.</p>
          <span className="next-footnote">GOOD THINGS TAKE SHAPE OVER TIME.</span>
        </article>
      </div>
    </section>
  );
}
