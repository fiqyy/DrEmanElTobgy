import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Heart,
  Brain,
  Sparkles,
  Send,
  CheckCircle,
  Phone,
  Mail,
  Menu,
  X,
  Award,
  Play
} from 'lucide-react';

/* ── Image assets ─────────────────────────────────── */
const HERO_IMAGE = require('./assets/pics/logo1.jpeg');
const LOGO2_IMG = require('./assets/pics/logo2.jpeg');
const DR_SPEAKING = require('./assets/pics/sessionexplaining.jpeg');
const TEDTALKS_IMG = require('./assets/pics/tedtalks.jpeg');
const TV_IMG = require('./assets/pics/tv.jpeg');
const HAFLA_IMG = require('./assets/pics/hafla w gasser.jpeg');
const SEATS_IMG = require('./assets/pics/seats.jpeg');
const LOGO = require('./assets/pics/logo.png');

const VIDEO_1 = require('./assets/vids/sample.mp4');
const VIDEO_2 = require('./assets/vids/sample.mp4');
const VIDEO_3 = require('./assets/vids/sample.mp4');

const WHATSAPP_NUMBER = '201002227876';

/* ═══════════════════════════════════════════════════ */
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `*New Consultation Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Message:* ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello, I would like to book a consultation with Dr. Eman El Tobgy.'
  )}`;

  /* ── Nav padding shrinks on scroll ── */
  const navPad = scrolled ? '0.6rem 1.5rem' : '0.9rem 1.5rem';

  return (
    <div className="page-root">
      {/* Ambient glows */}
      <div className="glow-orb glow-orb-purple" />
      <div className="glow-orb glow-orb-pink" />

      {/* ════════════ NAVIGATION ════════════ */}
      <nav className="glass-nav">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: navPad,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'padding 0.3s ease',
          boxSizing: 'border-box',
        }}>
          {/* Logo + Brand */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: '44px', height: '44px',
              borderRadius: 'var(--r-md)',
              background: 'var(--white)',
              border: '2px solid var(--blue-200)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '5px', flexShrink: 0,
              boxShadow: 'var(--shadow-sm)',
            }}>
              <img src={LOGO} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <span className="nav-brand-title">
              Eman El Tobgy&nbsp;<span className="gradient-text">MetaHealth</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="desktop-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Specializations</a>
            <a href="#media">Media</a>
            <a href="#contact" className="gradient-btn" style={{ borderRadius: 'var(--r-full)' }}>
              Book Consultation
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile drawer */}
          {mobileMenuOpen && (
            <div className="nav-menu-mobile">
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Specializations</a>
              <a href="#media" onClick={() => setMobileMenuOpen(false)}>Media & Sessions</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="gradient-btn">
                Book Consultation
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ════════════ HERO ════════════ */}
      <section id="home" className="hero-section">
        <div className="hero-ambient-glow" />

        <div className="hero-container">
          {/* Left: text */}
          <div className="hero-text-content hero-fade-in">
            {/* Badge */}
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Certified Meta Health &amp; Relationship Trainer
            </div>

            <h1>
              Transform Your{' '}
              <span className="gradient-text">Emotional Health</span>{' '}
              &amp; Relationships
            </h1>

            <p style={{ color: 'var(--gray-600)', fontSize: '1.07rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Integrating Meta Health principles and holistic relationship dynamics
              to unlock subconscious root causes, restore vitality, and build
              lasting interpersonal harmony.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#contact" className="btn-chic-primary">
                Book Consultation <span style={{ fontSize: '1.1rem' }}>→</span>
              </a>
              <a href="#about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.9rem 2rem',
                background: 'var(--white)',
                color: 'var(--gray-800)',
                border: '1.5px solid var(--gray-200)',
                borderRadius: 'var(--r-md)',
                fontWeight: 600, fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: 'var(--shadow-card)',
                transition: 'var(--ease)',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray-200)'; e.currentTarget.style.color = 'var(--gray-800)'; }}
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats-group">
              <div className="hero-stat-item">
                <span className="hero-stat-num">10+</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-num">2,500+</span>
                <span className="hero-stat-label">Clients Trained</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-num">99%</span>
                <span className="hero-stat-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>

          {/* Right: photo */}
          <div className="hero-image-wrapper">
            <div className="hero-float-card">
              <img src={HERO_IMAGE} alt="Dr. Eman El Tobgy" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ ABOUT ════════════ */}
      <section id="about" className="about-section-wrapper">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header-block">
            <span className="section-eyebrow">About Eman</span>
            <h2 className="section-main-title">
              Bridging Mind, Body &amp;{' '}
              <span className="gradient-text">Relational Wellbeing</span>
            </h2>
            <p className="section-sub">
              Dedicated to empowering individuals and couples through integrative
              mind-body science and relational transformation.
            </p>
          </div>

          <div className="about-content-grid">
            {/* Image mosaic */}
            <div className="about-mosaic">
              <div className="mosaic-cell span-rows">
                <img src={LOGO2_IMG} alt="Dr. Eman El Tobgy" />
              </div>
              <div className="mosaic-cell">
                <img src={DR_SPEAKING} alt="Dr. Eman Speaking" />
              </div>
              <div className="mosaic-cell">
                <img src={TEDTALKS_IMG} alt="TEDx Talk" />
              </div>
            </div>

            {/* Body text */}
            <div className="about-body-text">
              <h3>Your Guide to Holistic Healing &amp; Relationship Harmony</h3>
              <p>
                Eman combines proven physical health insights with deep emotional
                and relational coaching. Through Meta Health, she pinpoints the
                biological conflicts and stress patterns that manifest as physical
                symptoms or relationship tension.
              </p>
              <p>
                Whether you are seeking personal healing, resolving conflict with
                your partner, or training to become a healthier version of
                yourself, Eman offers personalized, action-oriented guidance
                grounded in international standards.
              </p>

              <div className="creds-grid">
                <div className="cred-tile">
                  <div className="cred-tile-icon">
                    <Award size={20} color="var(--primary)" />
                  </div>
                  <div className="cred-tile-text">
                    <strong>Certified Practitioner</strong>
                    <span>International Meta Health</span>
                  </div>
                </div>
                <div className="cred-tile">
                  <div className="cred-tile-icon">
                    <Heart size={20} color="#e11d48" />
                  </div>
                  <div className="cred-tile-text">
                    <strong>Relationship Specialist</strong>
                    <span>Couples &amp; Family Dynamics</span>
                  </div>
                </div>
                <div className="cred-tile">
                  <div className="cred-tile-icon">
                    <Brain size={20} color="var(--primary)" />
                  </div>
                  <div className="cred-tile-text">
                    <strong>Public Speaker</strong>
                    <span>Mindfulness &amp; Healing</span>
                  </div>
                </div>
                <div className="cred-tile">
                  <div className="cred-tile-icon">
                    <Sparkles size={20} color="#0891b2" />
                  </div>
                  <div className="cred-tile-text">
                    <strong>International Trainer</strong>
                    <span>Workshops &amp; Seminars</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ GALLERY STRIP ════════════ */}
      <section className="gallery-strip-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header-block" style={{ marginBottom: '2rem' }}>
            <span className="section-eyebrow">Featured Moments</span>
            <h2 className="section-main-title">
              Impacting Lives <span className="gradient-text">Everywhere</span>
            </h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={TEDTALKS_IMG} alt="TEDx Speaker" />
              <div className="gallery-overlay">TEDx Speaker</div>
            </div>
            <div className="gallery-item">
              <img src={TV_IMG} alt="TV Appearance" />
              <div className="gallery-overlay">TV Appearances</div>
            </div>
            <div className="gallery-item">
              <img src={DR_SPEAKING} alt="Live Workshop" />
              <div className="gallery-overlay">Live Workshops</div>
            </div>
            <div className="gallery-item">
              <img src={SEATS_IMG} alt="Training Events" />
              <div className="gallery-overlay">Training Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SPECIALIZATIONS ════════════ */}
      <section id="services" className="services-section">
        <div className="services-inner">
          <div className="section-header-block">
            <span className="section-eyebrow">What I Offer</span>
            <h2 className="section-main-title">
              Core <span className="gradient-text">Specializations</span>
            </h2>
            <p className="section-sub">
              Holistic programs crafted to resolve emotional conflicts and enhance
              relational intimacy.
            </p>
          </div>

          <div className="services-cards">
            <div className="svc-card">
              <div className="svc-icon svc-icon-blue">
                <Brain color="var(--primary)" size={30} />
              </div>
              <h3>Meta Health Analysis</h3>
              <p>
                Discovering the subconscious emotional conflicts behind physical
                symptoms and stress responses through evidence-based Meta Health
                methodology.
              </p>
            </div>

            <div className="svc-card">
              <div className="svc-icon svc-icon-teal">
                <Heart color="#0891b2" size={30} />
              </div>
              <h3>Couples Therapy</h3>
              <p>
                Rebuilding emotional safety, intimacy, and effective communication
                channels for couples navigating conflict and disconnection.
              </p>
            </div>

            <div className="svc-card">
              <div className="svc-icon svc-icon-purple">
                <Sparkles color="#7c3aed" size={30} />
              </div>
              <h3>Personal Transformation</h3>
              <p>
                Guided 1-on-1 coaching for emotional resilience, confidence,
                self-realization, and lasting behavioural change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ MEDIA ════════════ */}
      <section id="media" className="media-section">
        <div className="media-inner">
          <div className="section-header-block">
            <span className="section-eyebrow">Media &amp; Content</span>
            <h2 className="section-main-title">
              Featured <span className="gradient-text">Videos &amp; Media</span>
            </h2>
            <p className="section-sub">
              Explore insightful video lessons, event recordings, and media
              appearances by Dr. Eman El Tobgy.
            </p>
          </div>

          <div className="media-cards">
            {/* Video 1 */}
            <div className="vid-card">
              <div className="vid-thumb">
                <video controls preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={VIDEO_1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="vid-body">
                <h4>Understanding Mind-Body Connections</h4>
                <p>A deep dive into how unresolved emotional stress impacts biological health.</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="vid-card">
              <div className="vid-thumb">
                <video controls preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={VIDEO_2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="vid-body">
                <h4>Building Resilient Partnerships</h4>
                <p>Key communication strategies to transform modern relationships.</p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="vid-card">
              <div className="vid-thumb">
                <video controls preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={VIDEO_3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="vid-body">
                <h4>Healing Subconscious Stress</h4>
                <p>Answering common questions regarding emotional triggers and health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CONTACT ════════════ */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="section-header-block">
            <span className="section-eyebrow">Get in Touch</span>
            <h2 className="section-main-title">
              Ready to <span className="gradient-text">Transform</span> Your Life?
            </h2>
            <p className="section-sub">
              Book a session or inquire about corporate workshops and health
              training programs.
            </p>
          </div>

          <div className="contact-layout">
            {/* Info column */}
            <div className="contact-aside">
              <h3>Contact Information</h3>
              <div className="contact-items">
                <div className="contact-row">
                  <div className="contact-row-icon">
                    <Phone color="var(--primary)" size={22} />
                  </div>
                  <div className="contact-row-text">
                    <span>Phone / WhatsApp</span>
                    <strong>+20 100 222 7876</strong>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-row-icon">
                    <Mail color="var(--primary)" size={22} />
                  </div>
                  <div className="contact-row-text">
                    <span>Email Address</span>
                    <strong>contact@emanhealth.com</strong>
                  </div>
                </div>
              </div>

              {/* WhatsApp quick link */}
              <a href={waLink} target="_blank" rel="noreferrer" className="whatsapp-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Form card */}
            <div className="contact-form-card">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle
                    color="#10b981"
                    size={56}
                    style={{ margin: '0 auto 1rem', display: 'block' }}
                  />
                  <h3 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>
                    Opening WhatsApp…
                  </h3>
                  <p style={{ color: 'var(--gray-500)' }}>
                    Redirecting your message directly to Eman's WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3>Book a Session</h3>
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Briefly describe your goals or questions…"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                  />
                  <button type="submit" className="form-submit-btn">
                    <Send size={18} />
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="site-footer">
        <div className="footer-logo-wrap">
          <img src={LOGO} alt="Eman El Tobgy logo" className="footer-logo-img" />
        </div>
        <p className="footer-brand">Eman El Tobgy MetaHealth</p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Eman El Tobgy — Meta Health &amp; Relationship Specialist.
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
