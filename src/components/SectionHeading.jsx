export default function SectionHeading({ number, label, title, id }) {
  return <div className="section-heading"><p className="eyebrow"><span className="section-number">{number}</span>{label}</p><h2 id={id}>{title}</h2></div>;
}
