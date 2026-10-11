"use client";

import Image from "next/image";
import { useState } from "react";

const audiences = [
  { number: "01", title: "Anxiety & Panic", text: "For adults living with persistent worry, physical tension, panic, overthinking, or the feeling that something is always about to go wrong." },
  { number: "02", title: "Trauma Recovery", text: "Carefully paced support for single-incident trauma and long-standing patterns connected to childhood, relationships, or chronic stress." },
  { number: "03", title: "Burnout & Perfectionism", text: "For professionals, entrepreneurs, and creatives exhausted by high internal pressure and years of pushing through stress." },
];

const specialties = [
  ["Anxiety", "Understand the patterns behind worry, overthinking, tension, and difficulty sleeping—and develop practical ways to feel steadier."],
  ["Trauma", "Build safety and regulation at a thoughtful pace while processing experiences that continue to shape the present."],
  ["Burnout", "Reconnect with yourself after prolonged pressure and develop more sustainable ways of living and working."],
  ["EMDR", "When appropriate, EMDR is integrated with reflection, mindfulness, and body-oriented techniques to support recovery."],
];

const faqs = [
  ["Do you offer in-person and online therapy?", "Yes. Dr. Reynolds offers in-person therapy from her Santa Monica office and secure telehealth sessions for clients located throughout California."],
  ["Who do you work with?", "Dr. Reynolds works with adults experiencing anxiety, panic, trauma, chronic stress, professional burnout, perfectionism, and high internal pressure."],
  ["What is your approach to therapy?", "Her approach is warm, collaborative, and grounded. Sessions combine practical tools with reflection and depth-oriented work."],
  ["Which therapy methods do you use?", "Dr. Reynolds integrates cognitive-behavioral therapy, EMDR, mindfulness-based practices, and body-oriented techniques according to each client’s needs and pace."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}><span>Maya Reynolds, PsyD</span><small>Licensed Clinical Psychologist</small></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
        <nav className={menuOpen ? "open" : ""} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#support" onClick={closeMenu}>Who I Help</a><a href="#specialties" onClick={closeMenu}>Specialties</a><a href="#office" onClick={closeMenu}>Office</a><a href="#faqs" onClick={closeMenu}>FAQs</a><a className="button button-small" href="#contact" onClick={closeMenu}>Get in touch</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-portrait"><Image src="/images/office-two.jpg" alt="Dr. Maya Reynolds’s calm, light-filled therapy office in Santa Monica" fill priority sizes="(max-width: 860px) 100vw, 47vw" /></div>
        <div className="hero-content" id="content"><p className="kicker">Santa Monica · Telehealth across California</p><h1>Come back to a steadier sense of <em>yourself.</em></h1><p className="hero-lede">Warm, thoughtful therapy for adults navigating anxiety, trauma, burnout, and the pressure to hold everything together.</p><div className="hero-actions"><a className="button" href="#contact">Explore working together</a><a className="arrow-link" href="#about">Learn about my approach <span>↓</span></a></div><div className="hero-note"><span>01</span><p>Practical tools. Meaningful depth. Care shaped around your needs and pace.</p></div></div>
      </section>

      <section className="intro section" id="about">
        <p className="section-label">A place to begin</p>
        <div className="intro-heading"><h2>Life can look fine from the outside and still feel overwhelming within.</h2><p>You may be capable, driven, and used to managing on your own—while privately feeling tense, depleted, or stuck in overthinking. Therapy offers room to slow down, understand what is happening, and find a more sustainable way forward.</p></div>
        <div className="intro-detail"><div className="intro-image"><Image src="/images/office-two.jpg" alt="A bright, private therapy office in Santa Monica" fill sizes="(max-width: 860px) 100vw, 45vw" /></div><div className="intro-copy"><p className="quote">“You deserve support that respects both your strength and your need for care.”</p><p>Dr. Maya Reynolds provides a warm, collaborative environment where adults can feel understood without judgment. Sessions balance structure with reflection and are tailored to your history, goals, and pace.</p><a className="arrow-link" href="#approach">How therapy works <span>→</span></a></div></div>
      </section>

      <section className="support section" id="support"><div className="section-heading"><div><p className="section-label">Who I help</p><h2>Support for what you’re carrying.</h2></div><p>Focused care for adults who are ready to understand old patterns, feel more regulated, and move through life with greater clarity.</p></div><div className="audience-grid">{audiences.map((item) => <article key={item.title}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

      <section className="statement"><div className="statement-image"><Image src="/images/office-one.jpg" alt="A comfortable and uncluttered therapy room" fill sizes="100vw" /></div><div className="statement-overlay" /><div className="statement-copy"><p className="section-label light">A thoughtful space for real work</p><h2>Your story can be met with curiosity, care, and respect.</h2><p>You do not have to carry everything alone.</p></div></section>

      <section className="approach section" id="approach"><div className="approach-title"><p className="section-label">My approach</p><h2>Grounded, collaborative, and shaped around you.</h2></div><div className="approach-body"><p>Therapy works best when you feel respected, understood, and actively involved. Sessions are structured enough to feel supportive while leaving room for reflection and depth.</p><p>Dr. Reynolds integrates cognitive-behavioral therapy, EMDR, mindfulness-based practices, and body-oriented techniques. The goal is not only symptom relief, but greater insight, resilience, regulation, and self-trust.</p><div className="credentials"><span>CBT</span><span>EMDR</span><span>Mindfulness</span><span>Body-oriented care</span></div></div></section>

      <section className="profile"><div className="profile-image"><Image src="/images/maya-reynolds.png" alt="Portrait of Dr. Maya Reynolds" fill sizes="(max-width: 860px) 100vw, 42vw" /></div><div className="profile-copy"><p className="section-label">Meet your therapist</p><h2>Dr. Maya Reynolds</h2><p className="profile-role">PsyD · Licensed Clinical Psychologist</p><p>I offer therapy that is warm, direct, and grounded in the belief that meaningful change happens when insight is paired with practical support. Together, we will make sense of what you are experiencing and build a path forward that feels authentic to you.</p><a className="button outline" href="#contact">Begin a conversation</a></div></section>

      <section className="specialties section" id="specialties"><div className="section-heading"><div><p className="section-label">Areas of focus</p><h2>Care for the places that feel stuck.</h2></div><p>Each person’s experience is different. Therapy is tailored—not one-size-fits-all.</p></div><div className="specialty-grid">{specialties.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

      <section className="office section" id="office"><div className="office-copy"><p className="section-label">Our office</p><h2>A calm space for healing.</h2><p>The Santa Monica office is quiet, private, and intentionally uncluttered. Natural light and a comfortable setting create a grounding environment from the moment you arrive.</p><address>123th Street 45 W<br />Santa Monica, CA 90401</address><p className="availability">In-person sessions · Secure telehealth across California</p></div><div className="office-gallery"><div className="office-main"><Image src="/images/office-one.jpg" alt="Dr. Reynolds’s quiet Santa Monica office" fill sizes="(max-width: 860px) 100vw, 48vw" /></div><div className="office-inset"><Image src="/images/office-two.jpg" alt="Natural light and comfortable seating in the therapy office" fill sizes="(max-width: 860px) 70vw, 25vw" /></div></div></section>

      <section className="contact section" id="contact"><p className="section-label light">Take the next step</p><h2>Let’s find out if working together feels like the right fit.</h2><p>Reaching out is a meaningful first step. Dr. Reynolds offers in-person therapy in Santa Monica and secure telehealth throughout California.</p><a className="button light-button" href="#faqs">View common questions</a></section>

      <section className="faqs section" id="faqs"><div><p className="section-label">Common questions</p><h2>What to know before we begin.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <footer><div className="footer-main"><div className="footer-brand"><span>Maya Reynolds, PsyD</span><small>Licensed Clinical Psychologist</small></div><p>Thoughtful therapy for adults in Santa Monica and across California.</p></div><div><strong>Navigate</strong><a href="#about">About</a><a href="#support">Who I Help</a><a href="#specialties">Specialties</a><a href="#office">Office</a></div><div><strong>Location</strong><p>123th Street 45 W<br />Santa Monica, CA 90401</p><p>Secure telehealth across California</p></div><p className="copyright">© 2026 Dr. Maya Reynolds, PsyD <span>Privacy · Accessibility</span></p></footer>
    </main>
  );
}
