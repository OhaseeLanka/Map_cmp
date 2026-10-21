import { Link } from "react-router-dom";
import { landingContent } from "./content/en";

function StudyAreaPlate() {
  return (
    <div className="atlas-plate" role="img" aria-label={landingContent.mapPlaceholderLabel}>
      <div className="atlas-plate-grid" />
      <span className="plate-label">RESEARCH STUDY AREA</span>
      <span className="plate-coordinates">06° 55′ N / 80° 46′ E</span>
      <span className="plate-contour contour-one" />
      <span className="plate-contour contour-two" />
      <span className="plate-contour contour-three" />
      <span className="plate-route route-one" />
      <span className="plate-route route-two" />
      <span className="plate-marker marker-one"><i /> Walapane</span>
      <span className="plate-marker marker-two"><i /> Ambagamuwa</span>
      <span className="plate-marker marker-three"><i /> Kotmale</span>
      <span className="plate-caption">{landingContent.mapPlaceholderCaption}</span>
    </div>
  );
}

export default function ResearchLandingPage() {
  return (
    <div className="atlas-page">
      <header className="atlas-header">
        <Link className="atlas-wordmark" to="/">
          <span>{landingContent.institution}</span>
          {landingContent.wordmark}
        </Link>
        <nav aria-label="Primary navigation">
          {landingContent.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <Link className="atlas-open-link" to="/map">Open the map <span>→</span></Link>
        </nav>
      </header>

      <main>
        <section className="atlas-hero" aria-labelledby="hero-title">
          <div className="atlas-hero-copy">
            <p className="atlas-kicker">{landingContent.project} <span>/</span> INTEGRATED HAZARD INTELLIGENCE</p>
            <h1 id="hero-title">{landingContent.title}</h1>
            {landingContent.hero.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="atlas-study-area"><span>Study area</span><strong>Walapane · Ambagamuwa · Kotmale</strong><small>Nuwara Eliya District, Sri Lanka</small></div>
          </div>
          <div className="atlas-hero-visual"><StudyAreaPlate /></div>
          <p className="atlas-demo-note">{landingContent.demoNote}</p>
        </section>

        <section className="atlas-meta" aria-label="Project information">
          {landingContent.metadata.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}
        </section>

        <section className="atlas-history" id="history" aria-labelledby="history-title">
          <div className="atlas-history-marker"><span>01</span><strong>WHY THIS WORK</strong></div>
          <div className="atlas-history-event"><span className="atlas-event-date">LATE 2025</span><h2 id="history-title">Cyclone Ditwah</h2><div className="atlas-event-numbers"><strong>646<small>deaths</small></strong><strong>173<small>missing</small></strong><strong>2.2m<small>people affected</small></strong></div></div>
          <div className="atlas-history-copy"><p>About 2.2 million people were affected across all 25 districts. The event caused 646 deaths and left 173 people missing.</p><p>NBRO and DMC warnings are issued at district or division level, not for a specific slope or village. This project investigates how connected evidence can support more local decision-making.</p><small>Source: UN Sri Lanka situation report, January 2026.</small></div>
        </section>

        <section className="atlas-system atlas-section" id="system" aria-labelledby="system-title">
          <div className="atlas-section-label">02 / THE WHOLE SYSTEM</div>
          <div className="atlas-system-main"><h2 id="system-title">{landingContent.system.title}</h2><p className="atlas-lead">{landingContent.system.intro}</p>
            <ol className="atlas-component-flow">{landingContent.system.components.map((component) => <li key={component.number}><span>{component.number}</span><div><h3>{component.title}</h3><p>{component.text}</p></div><b>In Progress</b></li>)}</ol>
          </div>
        </section>

        <section className="atlas-workflow-band" id="workflow" aria-labelledby="workflow-title">
          <div className="atlas-section-label">03 / HOW IT WORKS</div>
          <div className="atlas-workflow-main"><h2 id="workflow-title">{landingContent.workflow.title}</h2><p className="atlas-lead">Data <span>→</span> models <span>→</span> map <span>→</span> decision</p>
            <ol className="atlas-workflow-list">{landingContent.workflow.steps.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
            <Link className="atlas-inline-link" to="/map">Open the map component <span>→</span></Link>
          </div>
        </section>

        <section className="atlas-limits atlas-section" id="limits" aria-labelledby="limits-title">
          <div className="atlas-section-label">{landingContent.limits.label}</div>
          <div className="atlas-limits-main"><h2 id="limits-title">{landingContent.limits.title}</h2><ol>{landingContent.limits.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></div>
        </section>

        <section className="atlas-team atlas-section" aria-labelledby="team-title">
          <div className="atlas-section-label">{landingContent.team.label}</div>
          <div className="atlas-team-main"><h2 id="team-title">A component-led project</h2><table><thead><tr><th>Component</th><th>Team member</th></tr></thead><tbody>{landingContent.team.rows.map((row) => <tr key={row.component}><td>{row.component}</td><td>{row.member}</td></tr>)}</tbody></table></div>
        </section>
      </main>
    </div>
  );
}
