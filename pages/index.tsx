import Head from "next/head";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeBranch, setActiveBranch] = useState('balaghat');
  const [activeTab, setActiveTab] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 1024) {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
        if (cursorDotRef.current) {
          cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth > 1024) {
      if (cursorRef.current) cursorRef.current.classList.add('active');
      if (cursorDotRef.current) cursorDotRef.current.classList.add('active');
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      if (cursorRef.current) cursorRef.current.classList.remove('active');
      if (cursorDotRef.current) cursorDotRef.current.classList.remove('active');
    }
  };

  return (
    <>
      <Head>
        <title>SHREE TILES SERVICE PVT.LTD | Premium Tile Solutions Since 2013</title>
        <meta name="description" content="Operating since 2013 | 2000+ customers | 2000+ projects completed | Premium tiles with easy installment facility. Branches in Balaghat & Nagpur." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      {/* Custom Cursor */}
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorRef} className="cursor-outline" />

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <span className="nav-logo-mark">◼</span>
            <span className="nav-logo-text">SHREE TILES</span>
          </a>

          <div className="nav-menu">
            <a href="#studio" className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>STUDIO</a>
            <a href="#collection" className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>COLLECTION</a>
            <a href="#branches" className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>BRANCHES</a>
            <a href="#contact" className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>CONTACT</a>
          </div>

          <div className="nav-actions">
            <button className="nav-search" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="nav-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-year">EST. 2013</span>
            <h1 className="hero-title">
              PREMIUM<br />
              TILE<br />
              <span>SOLUTIONS</span>
            </h1>
            <p className="hero-description">
              Serving Balaghat and Nagpur with quality tiles, 
              competitive pricing and easy installment facilities.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="hero-btn hero-btn-primary" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                CONTACT NOW
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M9 2L15 8L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#collection" className="hero-btn hero-btn-outline" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                VIEW COLLECTION
              </a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">2000+</span>
              <span className="hero-stat-label">CUSTOMERS</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">2000+</span>
              <span className="hero-stat-label">PROJECTS</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">2</span>
              <span className="hero-stat-label">BRANCHES</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>SCROLL</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" className="studio">
        <div className="studio-container">
          <div className="studio-grid">
            <div className="studio-content">
              <span className="studio-tag">SINCE 2013</span>
              <h2 className="studio-title">
                13+ YEARS OF<br />
                EXCELLENCE IN<br />
                <span>TILE SOLUTIONS</span>
              </h2>
              <p className="studio-description">
                Building trust one tile at a time with premium quality materials,
                expert craftsmanship, and unmatched customer service.
              </p>
              <div className="studio-features">
                <div className="studio-feature">
                  <span className="studio-feature-icon">◼</span>
                  <span>2000+ HAPPY CUSTOMERS</span>
                </div>
                <div className="studio-feature">
                  <span className="studio-feature-icon">◼</span>
                  <span>2000+ PROJECTS COMPLETED</span>
                </div>
                <div className="studio-feature">
                  <span className="studio-feature-icon">◼</span>
                  <span>EASY INSTALLMENT FACILITY</span>
                </div>
              </div>
            </div>
            <div className="studio-visual">
              <div className="studio-visual-grid">
                <div className="studio-visual-block"></div>
                <div className="studio-visual-block"></div>
                <div className="studio-visual-block"></div>
                <div className="studio-visual-block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="collection">
        <div className="collection-container">
          <div className="collection-header">
            <span className="collection-tag">OUR PRODUCTS</span>
            <h2 className="collection-title">
              PREMIUM TILE<br />
              <span>COLLECTION</span>
            </h2>
          </div>

          <div className="collection-grid">
            {[
              { name: 'VITRIFIED TILES', category: 'PREMIUM' },
              { name: 'CERAMIC TILES', category: 'BEST SELLER' },
              { name: 'DIGITAL PRINTED', category: 'NEW' },
              { name: 'ANTI-SKID TILES', category: 'SAFETY' },
              { name: 'PARKING TILES', category: 'OUTDOOR' },
              { name: 'WALL & FLOOR', category: 'INTERIOR' }
            ].map((item, index) => (
              <div key={index} className="collection-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="collection-card-image">
                  <span className="collection-card-category">{item.category}</span>
                </div>
                <div className="collection-card-content">
                  <h3>{item.name}</h3>
                  <a href="#" className="collection-card-link">
                    EXPLORE
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M7 2L11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="branches">
        <div className="branches-container">
          <div className="branches-header">
            <span className="branches-tag">VISIT US</span>
            <h2 className="branches-title">
              OUR<br />
              <span>BRANCHES</span>
            </h2>
          </div>

          <div className="branches-tabs">
            <button 
              className={`branches-tab ${activeBranch === 'balaghat' ? 'active' : ''}`}
              onClick={() => setActiveBranch('balaghat')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              BALAGHAT – AWALAZARI
            </button>
            <button 
              className={`branches-tab ${activeBranch === 'nagpur' ? 'active' : ''}`}
              onClick={() => setActiveBranch('nagpur')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              NAGPUR – NANDANVAN
            </button>
          </div>

          <div className={`branch-card ${activeBranch === 'balaghat' ? 'active' : ''}`}>
            <div className="branch-info">
              <div className="branch-hours">OPEN DAILY • 9AM – 9PM</div>
              <h3>BALAGHAT – AWALAZARI</h3>
              <div className="branch-details">
                <div className="branch-detail">
                  <span className="branch-detail-icon">📞</span>
                  <div>
                    <a href="tel:+919623640081">+91 96236 40081</a>
                    <span> / </span>
                    <a href="tel:+918668641503">+91 86686 41503</a>
                  </div>
                </div>
                <div className="branch-detail">
                  <span className="branch-detail-icon">📍</span>
                  <span>Awalazari, Balaghat, Madhya Pradesh</span>
                </div>
              </div>
              <div className="branch-actions">
                <a 
                  href="https://maps.app.goo.gl/SVrNsjrJCHa9L32a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="branch-btn branch-btn-outline"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  GET DIRECTIONS
                </a>
                <a 
                  href="https://wa.me/919623640081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="branch-btn branch-btn-whatsapp"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  WHATSAPP
                </a>
              </div>
            </div>
            <div className="branch-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d80.123456!3d21.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzI0LjQiTiA4MMKwMDcnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Balaghat Branch"
              />
            </div>
          </div>

          <div className={`branch-card ${activeBranch === 'nagpur' ? 'active' : ''}`}>
            <div className="branch-info">
              <div className="branch-hours">OPEN DAILY • 9AM – 9PM</div>
              <h3>NAGPUR – NANDANVAN</h3>
              <div className="branch-details">
                <div className="branch-detail">
                  <span className="branch-detail-icon">📞</span>
                  <div>
                    <a href="tel:+919623640081">+91 96236 40081</a>
                    <span> / </span>
                    <a href="tel:+918668641503">+91 86686 41503</a>
                  </div>
                </div>
                <div className="branch-detail">
                  <span className="branch-detail-icon">📍</span>
                  <span>Nandanvan, Nagpur, Maharashtra</span>
                </div>
              </div>
              <div className="branch-actions">
                <a 
                  href="https://maps.app.goo.gl/V1ndpkFPRj7YVJCs9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="branch-btn branch-btn-outline"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  GET DIRECTIONS
                </a>
                <a 
                  href="https://wa.me/918668641503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="branch-btn branch-btn-whatsapp"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  WHATSAPP
                </a>
              </div>
            </div>
            <div className="branch-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d79.123456!3d21.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzI0LjQiTiA3OcKwMDcnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Nagpur Branch"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-content">
              <span className="contact-tag">GET IN TOUCH</span>
              <h2 className="contact-title">
                READY TO<br />
                TRANSFORM<br />
                <span>YOUR SPACE?</span>
              </h2>
              <p className="contact-description">
                For inquiries, bulk orders, pricing details or installment facility,
                contact any of our branches directly.
              </p>
              <div className="contact-features">
                <div className="contact-feature">
                  <span className="contact-feature-icon">◼</span>
                  <span>FREE CONSULTATION</span>
                </div>
                <div className="contact-feature">
                  <span className="contact-feature-icon">◼</span>
                  <span>EASY INSTALLMENTS</span>
                </div>
                <div className="contact-feature">
                  <span className="contact-feature-icon">◼</span>
                  <span>EXPERT ADVICE</span>
                </div>
              </div>
            </div>
            <div className="contact-cards">
              <div className="contact-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className="contact-card-icon">B</span>
                <h4>BALAGHAT</h4>
                <p>Awalazari, Balaghat</p>
                <a href="tel:+919623640081">+91 96236 40081</a>
              </div>
              <div className="contact-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className="contact-card-icon">N</span>
                <h4>NAGPUR</h4>
                <p>Nandanvan, Nagpur</p>
                <a href="tel:+919623640081">+91 96236 40081</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-logo">◼</span>
              <div>
                <h3>SHREE TILES</h3>
                <p>SERVICE PVT. LTD.</p>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>STUDIO</h4>
                <a href="#about">ABOUT</a>
                <a href="#collection">COLLECTION</a>
                <a href="#branches">BRANCHES</a>
              </div>
              <div className="footer-column">
                <h4>BRANCHES</h4>
                <span>BALAGHAT</span>
                <span>NAGPUR</span>
                <span>9AM – 9PM</span>
              </div>
              <div className="footer-column">
                <h4>CONTACT</h4>
                <a href="tel:+919623640081">📞 96236 40081</a>
                <a href="tel:+918668641503">📞 86686 41503</a>
                <a href="https://wa.me/919623640081">💬 WHATSAPP</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 SHREE TILES SERVICE PVT. LTD.</p>
            <p>EST. 2013 | 2000+ CUSTOMERS | 2000+ PROJECTS</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919623640081"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.477 2 2 6.477 2 12C2 13.89 2.523 15.67 3.44 17.2L2.07 21.93L6.8 20.56C8.33 21.477 10.11 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16.5 14.5C16.5 14.5 15.5 15.5 12 12C8.5 8.5 9.5 7.5 9.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </a>
    </>
  );
}