import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Heart,
  Brain,
  Sparkles,
  Play,
  Send,
  CheckCircle,
  Phone,
  Mail,
  Menu,
  X,
  Award,
  Activity,
  ArrowRight
} from 'lucide-react';

const HERO_IMAGE_PATH = require('./assets/pics/tv.jpeg');
const DREMANSPEAKING = require('./assets/pics/sessionexplaining.jpeg');
const TRAININGWORKSHOP = require('./assets/pics/tedtalks.jpeg');
const INTROTOMETAHEALTH = require('./assets/vids/sample.mp4');
const RELATIONSHIPMASTERY = require('./assets/vids/sample.mp4');
const LIVEQandA = require('./assets/vids/sample.mp4');

const LOGO = require('./assets/pics/logo1.jpeg');

const WHATSAPP_NUMBER = '201200096266'; // Mobile Number that recieves Whatsapp Messages

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const textMessage = `*New Consultation Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service Requested:* ${formData.service || 'Not Specified'}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      textMessage.replace(/%0A/g, '\n')
    )}`;

    window.open(whatsappUrl, '_blank');

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#f0f9ff', color: '#0f172a' }}>
      {/* Background Soft Glow Orbs */}
      <div className="glow-orb glow-orb-purple"></div>
      <div className="glow-orb glow-orb-pink"></div>

      {/* Navigation Bar */}
      <nav
        className="glass-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '0.7rem 1.5rem' : '1rem 1.5rem',
          transition: 'all 0.3s ease',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '100vw'
        }}
      >
        {/* Logo & Brand Title Container */}
        <a
          href="#home"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            minWidth: 0,
            flexShrink: 1
          }}
        >
          {/* Elegant Logo Container */}
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(243,232,255,0.8))',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(147, 51, 234, 0.15)',
              border: '1px solid rgba(236, 72, 153, 0.2)'
            }}
          >
            <img
              src={LOGO}
              alt="Dr. Eman El Tobgy Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block'
              }}
              onError={(e) => {
                // Fallback icon if logo fails to load
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }
              }}
            />
            <Activity
              size={22}
              style={{ color: '#9333ea', display: 'none' }}
            />
          </div>

          <span className="nav-brand-title">
            Dr. Eman El Tobgy <span className="gradient-text">MetaHealth</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="desktop-menu">
          <a href="#home" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: 600 }}>Home</a>
          <a href="#about" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: 600 }}>More About Dr Eman</a>
          <a href="#services" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: 600 }}>Specializations</a>
          <a href="#media" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: 600 }}>Media & Sessions</a>
          <a href="#contact" className="gradient-btn" style={{ textDecoration: 'none', padding: '10px 20px', fontSize: '0.9rem' }}>Contact & Booking</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', color: '#0f172a', cursor: 'pointer' }}
          className="mobile-toggle"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="nav-menu-mobile">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>More About Dr Eman</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>Specializations</a>
            <a href="#media" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>Media & Sessions</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="gradient-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>Contact & Booking</a>
          </div>
        )}
      </nav>

      {/* 1. HERO SECTION */}
      <section id="home" style={{ paddingTop: '140px', paddingBottom: '80px', paddingLeft: '5%', paddingRight: '5%', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '6px 16px', borderRadius: '30px', background: '#fce7f3', border: '1px solid #f472b6', color: '#be185d', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              <Sparkles size={16} /> Certified Meta Health & Relationship Expert
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', color: '#0f172a' }}>
              Transform Your <span className="gradient-text">Emotional Health</span> & Relations
            </h1>
            <p style={{ color: '#475569', fontSize: '1.15rem', marginBottom: '2rem', maxWidth: '560px', fontWeight: 500 }}>
              Integrating Meta Health principles and holistic relationship dynamics to unlock subconscious root causes, restore vitality, and build lasting interpersonal harmony.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="gradient-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Book Consultation <ArrowRight size={18} />
              </a>
              <a href="#about" style={{ textDecoration: 'none', color: '#0f172a', padding: '14px 28px', borderRadius: '12px', background: '#ffffff', border: '1px solid #cbd5e1', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                Learn More
              </a>
            </div>

            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #cbd5e1' }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#9333ea' }}>10+</div>
                <div style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600 }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#db2777' }}>2,500+</div>
                <div style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600 }}>Clients Trained</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0284c7' }}>99%</div>
                <div style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600 }}>Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="floating-anim">
            <div className="glass-card" style={{ padding: '1.2rem', position: 'relative' }}>
              {/* IMAGE CONTAINER WITH IMAGE FALLBACK STYLING */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '380px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#f8fafc'
                }}
              >
                <img
                  src={HERO_IMAGE_PATH}
                  alt="Dr. Eman"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  style={{
                    display: 'none',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '380px',
                    padding: '1.5rem',
                    textAlign: 'center'
                  }}
                >
                  <p style={{ fontWeight: 700, color: '#0f172a', margin: 0 }}>Image not found</p>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                    Please verify: {HERO_IMAGE_PATH}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.2rem', padding: '1rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <Brain color="#db2777" size={28} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>Meta Health Mindset</h4>
                  <p style={{ fontSize: '0.8rem', color: '#475569' }}>Connecting organ systems with emotional root causes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MORE ABOUT DR EMAN */}
      <section id="about" style={{ padding: '90px 5%', position: 'relative', zIndex: 1, background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>
              More About <span className="gradient-text">Dr. Eman El Tobgy</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Dedicated to empowering individuals and couples through integrative mind-body science and relational transformation.
            </p>
          </div>

          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

              {/* First Image: Dr. Eman Speaking */}
              <div
                style={{
                  height: '200px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#f8fafc',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}
              >
                <img
                  src={DREMANSPEAKING}
                  alt="Dr. Eman Speaking"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }
                  }}
                />
                <div
                  style={{
                    display: 'none',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    padding: '1rem',
                    textAlign: 'center',
                    backgroundColor: '#f1f5f9'
                  }}
                >
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>Dr. Eman Speaking</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.2rem' }}>Image Not Found</span>
                </div>
              </div>

              {/* Second Image: Training Workshop */}
              <div
                style={{
                  height: '200px',
                  marginTop: '1.5rem',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#f8fafc',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}
              >
                <img
                  src={TRAININGWORKSHOP}
                  alt="Training Workshop"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }
                  }}
                />
                <div
                  style={{
                    display: 'none',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    padding: '1rem',
                    textAlign: 'center',
                    backgroundColor: '#f1f5f9'
                  }}
                >
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>Training Workshop</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.2rem' }}>Image Not Found</span>
                </div>
              </div>

            </div>

            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.2rem', color: '#0f172a' }}>
                Bridging Mind, Body, and Relational Wellbeing
              </h3>
              <p style={{ color: '#334155', marginBottom: '1.2rem', lineHeight: '1.7', fontSize: '1rem' }}>
                Dr. Eman combines proven physical health insights with deep emotional and relational coaching. Through Meta Health, she pinpoints the biological conflicts and stress patterns that manifest as physical symptoms or relationship tension.
              </p>
              <p style={{ color: '#334155', marginBottom: '2rem', lineHeight: '1.7', fontSize: '1rem' }}>
                Whether you are seeking personal healing, resolving conflict with your partner, or training to become a healthier version of yourself, Dr. Eman offers personalized, action-oriented guidance.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', gap: '0.8rem', alignItems: 'center', background: '#f0f9ff' }}>
                  <Award color="#9333ea" size={28} />
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>Certified Practitioner</h5>
                    <span style={{ fontSize: '0.8rem', color: '#475569' }}>International Meta Health</span>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', gap: '0.8rem', alignItems: 'center', background: '#fce7f3' }}>
                  <Heart color="#db2777" size={28} />
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>Relationship Specialist</h5>
                    <span style={{ fontSize: '0.8rem', color: '#475569' }}>Couples & Family Dynamics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPECIALIZATIONS SECTION */}
      <section id="services" style={{ padding: '90px 5%', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>
              Core <span className="gradient-text">Specializations</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Holistic programs crafted to resolve emotional conflicts and enhance relational intimacy.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ background: '#f3e8ff', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <Brain color="#9333ea" size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.8rem', color: '#0f172a' }}>Meta Health Analysis</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>
                Discovering the subconscious emotional conflicts behind physical symptoms and stress responses.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ background: '#fce7f3', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <Heart color="#db2777" size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.8rem', color: '#0f172a' }}>Couples Therapy</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>
                Rebuilding emotional safety, intimacy, and effective communication channels for couples.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ background: '#e0f2fe', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <Sparkles color="#0284c7" size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.8rem', color: '#0f172a' }}>Personal Transformation</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>
                Guided 1-on-1 coaching for emotional resilience, confidence, and self-realization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEDIA & VIDEO GALLERY SECTION */}
      <section id="media" style={{ padding: '90px 5%', position: 'relative', zIndex: 1, background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>
              Featured <span className="gradient-text">Videos & Media</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Explore insightful video lessons, event recordings, and media appearances.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

            {/* Video 1: Intro to Meta Health */}
            <div className="glass-card" style={{ padding: '1.2rem' }}>
              <div
                style={{
                  width: '100%',
                  height: '220px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0f172a',
                  position: 'relative'
                }}
              >
                {INTROTOMETAHEALTH ? (
                  <video
                    controls
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={INTROTOMETAHEALTH} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      color: '#ffffff'
                    }}
                  >
                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.8rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
                      <Play color="#db2777" size={28} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Intro to Meta Health</span>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.2rem' }}>Video not found</span>
                  </div>
                )}
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem', color: '#0f172a' }}>
                Understanding Mind-Body Connections
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                A deep dive into how unresolved emotional stress impacts biological health.
              </p>
            </div>

            {/* Video 2: Relationship Mastery */}
            <div className="glass-card" style={{ padding: '1.2rem' }}>
              <div
                style={{
                  width: '100%',
                  height: '220px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0f172a',
                  position: 'relative'
                }}
              >
                {RELATIONSHIPMASTERY ? (
                  <video
                    controls
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={RELATIONSHIPMASTERY} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      color: '#ffffff'
                    }}
                  >
                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.8rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
                      <Play color="#9333ea" size={28} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Relationship Mastery</span>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.2rem' }}>Video not found</span>
                  </div>
                )}
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem', color: '#0f172a' }}>
                Building Resilient Partnerships
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                Key communication strategies to transform modern relationships.
              </p>
            </div>

            {/* Video 3: Live Q&A Recording */}
            <div className="glass-card" style={{ padding: '1.2rem' }}>
              <div
                style={{
                  width: '100%',
                  height: '220px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0f172a',
                  position: 'relative'
                }}
              >
                {LIVEQandA ? (
                  <video
                    controls
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={LIVEQandA} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      color: '#ffffff'
                    }}
                  >
                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.8rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
                      <Play color="#0284c7" size={28} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Live Q&A Recording</span>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.2rem' }}>Video not found</span>
                  </div>
                )}
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem', color: '#0f172a' }}>
                Healing Subconscious Stress
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                Answering common questions regarding emotional triggers and health.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CONTACT & BOOKING SECTION */}
      <section id="contact" style={{ padding: '90px 5%', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: '550px', margin: '0 auto', fontSize: '1.05rem' }}>
              Book a session or inquire about corporate workshops and health training programs.
            </p>
          </div>

          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a' }}>Contact Information</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#f3e8ff', padding: '0.8rem', borderRadius: '12px' }}>
                    <Phone color="#9333ea" size={24} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Phone / WhatsApp</span>
                    <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>+123 456 7890</strong>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#fce7f3', padding: '0.8rem', borderRadius: '12px' }}>
                    <Mail color="#db2777" size={24} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Email Address</span>
                    <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>contact@dremanhealth.com</strong>
                  </div>
                </div>

                {/* <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#e0f2fe', padding: '0.8rem', borderRadius: '12px' }}>
                    <MapPin color="#0284c7" size={24} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Clinic / Online</span>
                    <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>Private Clinic & Worldwide Online Sessions</strong>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem' }}>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle color="#10b981" size={56} style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Opening WhatsApp...</h3>
                  <p style={{ color: '#475569' }}>Redirecting your message directly to Dr. Eman's WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Book a Session</h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: 500, outline: 'none' }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: 500, outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: 500, outline: 'none' }}
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: 500, outline: 'none' }}
                    >
                      <option value="">Select Service</option>
                      <option value="Meta Health Consultation">Meta Health Consultation</option>
                      <option value="Relationship Coaching">Relationship Coaching</option>
                      <option value="Group Workshop">Group Workshop</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Briefly describe your goals or questions..."
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: 500, outline: 'none', resize: 'vertical' }}
                  ></textarea>

                  <button type="submit" className="gradient-btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.6rem' }}>
                    <Send size={18} /> Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e2e8f0', background: '#ffffff', padding: '2rem 5%', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
        <p>© {new Date().getFullYear()} Dr. Eman - Meta Health & Relationship Specialist. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;