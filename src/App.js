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
  Activity
}
  from 'lucide-react';

import TEDTALKS_IMG from './assets/pics/tedtalks.jpeg';
import TV_IMG from './assets/pics/tv.jpeg';
import SEATS_IMG from './assets/pics/seats.jpeg';

const HERO_IMAGE_PATH = require('./assets/pics/logo1.jpeg');
const DOVERSESSION = require('./assets/pics/doverspeaker.jpeg');
const LIVESSESION = require('./assets/pics/live session.jpeg');
const DREMANSPEAKING = require('./assets/pics/liveworkshop.jpeg');
//const DR_EMAN_PROFILE = require('./assets/pics/prof pic.jpeg');
//const INTROTOMETAHEALTH = require('./assets/vids/vid1.mp4');
//const RELATIONSHIPMASTERY = "https://player.cloudinary.com/embed/?cloud_name=le4531f6&public_id=vid2";
//const LIVEQandA = require('./assets/vids/vid3.mp4');
const LOGO = require('./assets/pics/logo.png');
const WHATSAPP_NUMBER = '201002227876'; // Mobile Number that receives WhatsApp Messages
const EMAIL_ADDRESS = 'emandtobgy@gmail.com';


const VideoPlayerWithSnippet = ({ src, altTitle, playColor = '#7c1ee7ff' }) => {
  const [poster, setPoster] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);
  const clickTimeoutRef = React.useRef(null);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }

    clickTimeoutRef.current = setTimeout(() => {
      togglePlayPause();
      clickTimeoutRef.current = null;
    }, 250);
  };

  const handleVideoDoubleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }

    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (video.requestFullscreen) {
        video.requestFullscreen().catch(() => { });
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen(); // iOS Safari
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => { });
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!src) return;
    const tempVideo = document.createElement('video');
    tempVideo.src = `${src}#t=1.0`;
    tempVideo.crossOrigin = 'anonymous';
    tempVideo.muted = true;
    tempVideo.playsInline = true;
    tempVideo.preload = 'auto';

    const handleLoadedData = () => {
      try {
        tempVideo.currentTime = 1.0;
      } catch (err) {
        // Fallback
      }
    };

    const handleSeeked = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = tempVideo.videoWidth || 640;
        canvas.height = tempVideo.videoHeight || 360;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
          if (dataUrl && dataUrl.length > 500) {
            setPoster(dataUrl);
          }
        }
      } catch (e) {
        // Ignored
      }
    };

    tempVideo.addEventListener('loadeddata', handleLoadedData);
    tempVideo.addEventListener('seeked', handleSeeked);

    return () => {
      tempVideo.removeEventListener('loadeddata', handleLoadedData);
      tempVideo.removeEventListener('seeked', handleSeeked);
      tempVideo.src = '';
    };
  }, [src]);

  return (
    <div
      style={{
        width: '100%',
        height: '220px',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#1e293b',
        position: 'relative'
      }}
    >
      {src ? (
        <>
          <video
            ref={videoRef}
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            preload="auto"
            playsInline
            poster={poster || undefined}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          >
            <source src={`${src}#t=1.0`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Clickable overlay over video viewport (leaving the bottom 52px for native controls bar) */}
          <div
            onClick={handleVideoClick}
            onDoubleClick={handleVideoDoubleClick}
            onContextMenu={(e) => e.preventDefault()}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: '52px',
              cursor: 'pointer',
              zIndex: 1
            }}
          />

          {/* Elegant preview overlay before the user starts playing */}
          {!isPlaying && poster && (
            <div
              onClick={handleVideoClick}
              onDoubleClick={handleVideoDoubleClick}
              onContextMenu={(e) => e.preventDefault()}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: '#1e293b',
                zIndex: 2
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.15))'
                }}
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: 3,
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.92)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                  transition: 'transform 0.2s ease',
                  paddingLeft: '4px'
                }}
              >
                <Play color="#2563eb" size={26} fill="#2563eb" />
              </div>
            </div>
          )}
        </>
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
            <Play color={playColor} size={28} />
          </div>
          <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{altTitle}</span>
          <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.2rem' }}>Video not found</span>
        </div>
      )}
    </div>
  );
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
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
      `*Phone:* ${formData.phone}%0A` +
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
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(231, 231, 231, 0.8))',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(147, 51, 234, 0.15)',
              border: '1px solid rgba(0, 208, 245, 0.65)'
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
              style={{ color: '#33e4eaff', display: 'none' }}
            />
          </div>

          <span className="nav-brand-title">
            Eman El Tobgy <span className="gradient-text">MetaHealth</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="desktop-menu">
          <a href="#home" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: 600 }}>Home</a>
          <a href="#about" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: 600 }}>More About Eman</a>
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
            <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>More About Eman</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>Specializations</a>
            <a href="#media" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>Media & Sessions</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="gradient-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>Contact & Booking</a>
          </div>
        )}
      </nav>

      {/* 1. HERO SECTION (Chic, Animated & Fully Responsive) */}
      <section id="home" className="hero-section" style={{ position: 'relative' }}>
        {/* Ambient Decorative Glow behind the card */}
        <div className="hero-ambient-glow" />

        <div className="hero-container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Left Side: Text Content & CTAs */}
          <div className="hero-text-content hero-fade-in">
            <div
              className="hero-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1.1rem',
                background: 'rgba(251, 207, 232, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(244, 114, 182, 0.3)',
                color: '#9d174d',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                marginBottom: '1.4rem'
              }}
            >
              Certified Self Empowerment & Relationship Trainer
            </div>

            <h1 style={{ fontSize: 'clamp(2.3rem, 5.2vw, 3.6rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.18, marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              Understand <span className="gradient-text">Yourself.</span> Build <span className='gradient-text'>Healthier </span>Relationships
            </h1>

            <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.65, marginBottom: '2.2rem', fontWeight: 400 }}>
              Discover how your emotions, experiences, and relationship patterns shape the way you connect with others. From building stronger family bonds and nurturing the relationship between mothers and their children to creating healthier social connections, begin your journey toward greater self-awareness and more meaningful relationships.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.8rem' }}>
              <a
                href="#contact"
                className="btn-chic-primary"
                style={{
                  padding: '0.9rem 2rem',
                  background: 'linear-gradient(135deg, #46cdefff 0%, #5e4dffff 100%)',
                  color: '#ffffff',
                  borderRadius: '14px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 10px 25px -5px rgba(217, 70, 239, 0.35)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>Book Consultation</span>
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </a>
              <a
                href="#about"
                style={{
                  padding: '0.9rem 2rem',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                }}
              >
                Learn More
              </a>
            </div>

            {/* Social Proof Stats */}
            <div className="hero-stats-group" style={{ display: 'flex', gap: '2.5rem', borderTop: '1px solid rgba(226, 232, 240, 0.8)', paddingTop: '1.6rem' }}>
              <div>
                <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#46cdefff', margin: 0, letterSpacing: '-0.02em' }}>10+</h3>
                <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, fontWeight: 500 }}>Years Experience</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#46cdefff', margin: 0, letterSpacing: '-0.02em' }}>2,500+</h3>
                <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, fontWeight: 500 }}>Clients Trained</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#46cdefff', margin: 0, letterSpacing: '-0.02em' }}>99%</h3>
                <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, fontWeight: 500 }}>Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Side: Animated Photo Card */}
          <div className="hero-image-wrapper">
            <div
              className="hero-float-card"
              style={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
                border: '6px solid #ffffff',
                backgroundColor: '#0f172a'
              }}
            >
              {/* Featured Photo */}
              <img
                src={HERO_IMAGE_PATH}
                alt="Dr. Eman El Tobgy"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '460px',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MORE ABOUT DR EMAN */}
      <section id="about" style={{ padding: '90px 5%', position: 'relative', zIndex: 1, background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>
              More About <span className="gradient-text"> <br />Eman ElTobgy</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Dedicated to helping individuals understand themselves, navigate their emotions, and build healthier, more meaningful relationships.
            </p>
          </div>

          {
            /* 
            Dr. Eman Banner Picture Frame
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}>
              <div
                className="glass-card"
                style={{
                  width: '100%',
                  maxWidth: '900px',
                  padding: '10px',
                  borderRadius: '24px',
                  background: '#ffffff',
                  border: '1.5px solid rgba(62, 188, 238, 0.4)',
                  boxShadow: '0 15px 35px -8px rgba(15, 23, 42, 0.1), 0 0 25px rgba(62, 188, 238, 0.12)',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '320px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#f8fafc'
                  }}
                >
                  <img
                    src={DR_EMAN_PROFILE}
                    alt="Dr. Eman El Tobgy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
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
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>Dr. Eman El Tobgy</span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>Profile Image</span>
                  </div>
                </div>
              </div>
            </div> 
            */
          }

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
                  src={DOVERSESSION}
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
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  marginBottom: '1.4rem',
                  color: '#0f172a',
                  lineHeight: 1.35,
                  letterSpacing: '-0.02em'
                }}
              >
                Understanding{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #38bdf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                    filter: 'drop-shadow(0 2px 10px rgba(59, 130, 246, 0.22))',
                    fontWeight: 850
                  }}
                >
                  Yourself
                </span>{' '}
                is the First Step to Understanding Your{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                    filter: 'drop-shadow(0 2px 10px rgba(6, 182, 212, 0.22))',
                    fontWeight: 850
                  }}
                >
                  Relationships
                </span>
              </h3>
              <p style={{ color: '#334155', marginBottom: '1.2rem', lineHeight: '1.7', fontSize: '1rem' }}>
                Eman El Tobgy focuses on helping individuals explore the emotional patterns that shape their relationships and develop greater self-awareness, understanding, and healthier ways of connecting with others.
              </p>
              <p style={{ color: '#334155', marginBottom: '1.2rem', lineHeight: '1.7', fontSize: '1rem' }}>
                From marital relationships to family and social connections, including the relationship between mothers and their children, her approach encourages a deeper understanding of emotional needs, communication, and everyday relationship challenges.
              </p>
              <p style={{ color: '#334155', marginBottom: '2rem', lineHeight: '1.7', fontSize: '1rem' }}>
                Beyond her work with individuals, Eman has participated in various conferences and seminars related to children, university students, and education. She has also served as an official sponsor of several conferences, reflecting her engagement with community initiatives and her commitment to supporting awareness, learning, and personal development.
              </p>
              <p style={{ color: '#334155', marginBottom: '2rem', lineHeight: '1.7', fontSize: '1rem' }}>
                Because understanding yourself and others can be the beginning of more conscious, balanced, and fulfilling relationships.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', gap: '0.8rem', alignItems: 'center', background: '#f0f9ff' }}>
                  <Award color="#65bd13ff" size={28} />
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>Certified Trainer</h5>
                    <span style={{ fontSize: '0.8rem', color: '#475569' }}>Meta Health Foundation</span>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', gap: '0.8rem', alignItems: 'center', background: '#f0f9ff' }}>
                  <Heart color="#df2626ff" size={28} />
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>Relationship Advisor</h5>
                    <span style={{ fontSize: '0.8rem', color: '#475569' }}>Couples & Family Dynamics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ════════════ FEATURED MOMENTS GALLERY ════════════ */}
      <section className="gallery-strip-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header-block">
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
              <img src={LIVESSESION} alt="Live Workshop" />
              <div className="gallery-overlay">Live Workshops</div>
            </div>

            <div className="gallery-item">
              <img src={SEATS_IMG} alt="Training Events" />
              <div className="gallery-overlay">Training Events</div>
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
              <div style={{ background: '#cefff0ff', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <Brain color="#137734ff" size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.8rem', color: '#0f172a' }}>Meta Health Analysis</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>
                Discovering the subconscious emotional conflicts behind physical symptoms and stress responses.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ background: '#fce7f3', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <Heart color="#df2626ff" size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.8rem', color: '#0f172a' }}>Relationship Advisory</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>
                Professional guidance for individuals and couples seeking to improve relationships, resolve conflicts, and build healthier connections.
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
              Featured <span className="gradient-text"> <br /> Videos & Media</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Explore insightful video lessons, event recordings, and media appearances.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

            {/* Video 1: Intro to Meta Health */}
            <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column' }}>
              <VideoPlayerWithSnippet
                autoplay
                loop
                muted
                playsinline
                controls
                src="https://res.cloudinary.com/le4531f6/video/upload/v1792785380/vid3.mp4" type="video/mp4"
                altTitle="Beyond Awareness: The Journey to Lasting Change"
                playColor="#2563eb"
              />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem', color: '#0f172a' }}>
                Beyond Awareness: The Journey to Lasting Change
              </h4>
            </div>

            {/* Video 2: Relationship Mastery */}
            <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column' }}>
              <VideoPlayerWithSnippet
                autoplay
                loop
                muted
                playsinline
                controls
                src="https://res.cloudinary.com/le4531f6/video/upload/v1792785052/vid2.mp4" type="video/mp4"
                altTitle="A Personal Journey Toward Self-Awareness and Healthier Relationships"
                playColor="#2563eb"
              />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem', color: '#0f172a' }}>
                A Personal Journey Toward Self-Awareness and Healthier Relationships
              </h4>
            </div>

            {/* Video 3: Live Q&A Recording */}
            <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column' }}>
              <VideoPlayerWithSnippet
                autoplay
                loop
                muted
                playsinline
                controls
                preload="metadata"
                src="https://res.cloudinary.com/le4531f6/video/upload/v1792787232/vid1.mp4" type="video/mp4"
                altTitle="Real Stories. Meaningful Change."
                playColor="#2563eb"
              />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem', color: '#0f172a' }}>
                Real Stories. Meaningful Change.
              </h4>
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
                  <div style={{ background: '#ffffffff', padding: '0.8rem', borderRadius: '12px' }}>
                    <Phone color="#2d9e17ff" size={24} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Phone / WhatsApp</span>
                    <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>+201002227876</strong>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#ffffffff', padding: '0.8rem', borderRadius: '12px' }}>
                    <Mail color="#207aa3ff" size={24} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Email Address</span>
                    <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>{EMAIL_ADDRESS}</strong>
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
                  <p style={{ color: '#475569' }}>Redirecting your message directly to Eman's WhatsApp.</p>
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
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: 500, outline: 'none' }}
                    />

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
        <p>© {new Date().getFullYear()} Eman El Tobgy - Meta Health & Relationship Specialist. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;