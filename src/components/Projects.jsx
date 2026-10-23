import { projects } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

function ProjectCard({ project, index }) {
  return (
    <article className="work-card">
      <div className="work-card-top"><span className="work-icon"><Icon name={project.icon} size={22} /></span><span className="project-meta">{String(index + 1).padStart(2, '0')} / {project.category.toUpperCase()}</span></div>
      <div className="work-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
      <div className="work-card-body">
        <p className="work-kind">{project.kind}</p>
        <h3>{project.href ? <a href={project.href}>{project.title}<Icon name="arrow" size={20} /></a> : project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Technologies">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section projects-section container" id="projects" aria-labelledby="projects-title">
      <div className="section-title-row"><SectionHeading number="05" label="SELECTED WORK" title="Infrastructure in practice." id="projects-title" /><span className="section-aside">Earlier professional work + personal projects</span></div>
      <p className="work-intro">A selection of migrations, infrastructure changes, and lab work from my background, alongside the portfolio I'm building today.</p>
      <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
    </section>
  );
}
