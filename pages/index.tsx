import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeBranch, setActiveBranch] = useState('balaghat');

  useEffect(() => {
    // Custom cursor
    const cursor = document.querySelector(".cursor") as HTMLElement;
    const moveCursor = (e: MouseEvent) => {
      if (!cursor) return;
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    window.addEventListener("mousemove", moveCursor);

    // Navbar scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Parallax effect
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero') as HTMLElement;
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleParallax);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Shree Tiles Service Pvt. Ltd. | Premium Tiles Since 2013</title>
        <meta
          name="description"
          content="Operating since 2013 | 2000+ customers | 2000+ projects completed | Premium tiles with easy installment facility. Branches in Balaghat & Nagpur."
        />
        <meta name="keywords" content="tiles, vitrified tiles, ceramic tiles, balaghat, nagpur, shree tiles" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Custom Cursor */}
      <div className="cursor"></div>
      <div className="cursor-glow"></div>

      {/* Loading Animation */}
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>

      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            <div className="logo-icon">
              <span className="logo-shree">श्री</span>
            </div>
            <div className="logo-text">
              <span className="logo-main">Shree Tiles</span>
              <span className="logo-sub">Service Pvt. Ltd.</span>
            </div>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`hamburger-line ${menuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${menuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${menuOpen ? 'active' : ''}`}></span>
          </div>

          <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
            <li><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#collection" className="nav-link" onClick={() => setMenuOpen(false)}>Collection</a></li>
            <li><a href="#branches" className="nav-link" onClick={() => setMenuOpen(false)}>Branches</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li className="nav-cta">
              <a href="#contact" className="btn-glow">Get Quote</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`
            }}></div>
          ))}
        </div>
        
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="badge-icon">✓</span>
            <span>Trusted Since 2013</span>
          </div>

          <h1 className="hero-title">
            Premium Tile Solutions
            <span className="hero-title-highlight">Since 2013</span>
          </h1>

          <p className="hero-description">
            Serving Balaghat and Nagpur with quality tiles,
            competitive pricing and easy installment facilities.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">2000+</span>
              <span className="hero-stat-label">Happy Customers</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">2000+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">2</span>
              <span className="hero-stat-label">Branches</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              <span>Contact Now</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#collection" className="btn-secondary">
              View Collection
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ABOUT / STATS SECTION */}
      <section id="about" className="stats-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Journey</span>
            <h2 className="section-title">13+ Years of Excellence</h2>
            <p className="section-description">
              Building trust one tile at a time since 2013
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-content">
                <h3 className="stat-number">2013</h3>
                <p className="stat-label">Established</p>
              </div>
              <div className="stat-glow"></div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3 className="stat-number">2000+</h3>
                <p className="stat-label">Happy Customers</p>
              </div>
              <div className="stat-glow"></div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🏗️</div>
              <div className="stat-content">
                <h3 className="stat-number">2000+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION SECTION */}
      <section id="collection" className="collection-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Products</span>
            <h2 className="section-title">Premium Tile Collection</h2>
            <p className="section-description">
              Discover our wide range of high-quality tiles
            </p>
          </div>

          <div className="collection-grid">
            <div className="collection-card">
              <div className="card-image">
                <div className="card-overlay"></div>
                <span className="card-category">Premium</span>
              </div>
              <div className="card-content">
                <h3>Vitrified Tiles</h3>
                <p>Durable & glossy finish</p>
                <a href="#" className="card-link">Explore →</a>
              </div>
            </div>

            <div className="collection-card">
              <div className="card-image">
                <div className="card-overlay"></div>
                <span className="card-category">Best Seller</span>
              </div>
              <div className="card-content">
                <h3>Ceramic Tiles</h3>
                <p>Classic & elegant</p>
                <a href="#" className="card-link">Explore →</a>
              </div>
            </div>

            <div className="collection-card">
              <div className="card-image">
                <div className="card-overlay"></div>
                <span className="card-category">New</span>
              </div>
              <div className="card-content">
                <h3>Digital Printed Tiles</h3>
                <p>Modern designs</p>
                <a href="#" className="card-link">Explore →</a>
              </div>
            </div>

            <div className="collection-card">
              <div className="card-image">
                <div className="card-overlay"></div>
                <span className="card-category">Safety</span>
              </div>
              <div className="card-content">
                <h3>Anti-Skid Tiles</h3>
                <p>Safe & stylish</p>
                <a href="#" className="card-link">Explore →</a>
              </div>
            </div>

            <div className="collection-card">
              <div className="card-image">
                <div className="card-overlay"></div>
                <span className="card-category">Outdoor</span>
              </div>
              <div className="card-content">
                <h3>Parking Tiles</h3>
                <p>Heavy duty</p>
                <a href="#" className="card-link">Explore →</a>
              </div>
            </div>

            <div className="collection-card">
              <div className="card-image">
                <div className="card-overlay"></div>
                <span className="card-category">Interior</span>
              </div>
              <div className="card-content">
                <h3>Wall & Floor Tiles</h3>
                <p>Complete solutions</p>
                <a href="#" className="card-link">Explore →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANCHES SECTION */}
      <section id="branches" className="branches-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Visit Us</span>
            <h2 className="section-title">Our Branches</h2>
            <p className="section-description">
              Open daily from 9 AM to 9 PM
            </p>
          </div>

          <div className="branch-tabs">
            <button 
              className={`branch-tab ${activeBranch === 'balaghat' ? 'active' : ''}`}
              onClick={() => setActiveBranch('balaghat')}
            >
              Balaghat – Awalazari
            </button>
            <button 
              className={`branch-tab ${activeBranch === 'nagpur' ? 'active' : ''}`}
              onClick={() => setActiveBranch('nagpur')}
            >
              Nagpur – Nandanvan
            </button>
          </div>

          <div className={`branch-card ${activeBranch === 'balaghat' ? 'active' : ''}`}>
            <div className="branch-info">
              <div className="branch-header">
                <h3>Balaghat – Awalazari</h3>
                <span className="branch-hours">9 AM – 9 PM (All Days)</span>
              </div>

              <div className="branch-details">
                <div className="branch-detail">
                  <span className="detail-icon">📞</span>
                  <div className="detail-text">
                    <strong>Phone Numbers:</strong>
                    <a href="tel:+919623640081">9623640081</a> | 
                    <a href="tel:+918668641503">8668641503</a>
                  </div>
                </div>

                <div className="branch-detail">
                  <span className="detail-icon">⏰</span>
                  <div className="detail-text">
                    <strong>Opening Hours:</strong>
                    <span>9 AM – 9 PM (Open All Days)</span>
                  </div>
                </div>

                <div className="branch-detail">
                  <span className="detail-icon">📍</span>
                  <div className="detail-text">
                    <strong>Address:</strong>
                    <span>Awalazari, Balaghat</span>
                  </div>
                </div>
              </div>

              <div className="branch-actions">
                <a
                  href="https://maps.app.goo.gl/SVrNsjrJCHa9L32a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>📍 Get Directions</span>
                </a>

                <a
                  href="https://wa.me/919623640081?text=Hello%20Shree%20Tiles%20(Balaghat)%2C%20I%20have%20a%20question%20about%20your%20tiles."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <span>💬 WhatsApp Balaghat</span>
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
                title="Balaghat Branch Map"
              ></iframe>
            </div>
          </div>

          <div className={`branch-card ${activeBranch === 'nagpur' ? 'active' : ''}`}>
            <div className="branch-info">
              <div className="branch-header">
                <h3>Nagpur – Nandanvan</h3>
                <span className="branch-hours">9 AM – 9 PM (All Days)</span>
              </div>

              <div className="branch-details">
                <div className="branch-detail">
                  <span className="detail-icon">📞</span>
                  <div className="detail-text">
                    <strong>Phone Numbers:</strong>
                    <a href="tel:+919623640081">9623640081</a> | 
                    <a href="tel:+918668641503">8668641503</a>
                  </div>
                </div>

                <div className="branch-detail">
                  <span className="detail-icon">⏰</span>
                  <div className="detail-text">
                    <strong>Opening Hours:</strong>
                    <span>9 AM – 9 PM (Open All Days)</span>
                  </div>
                </div>

                <div className="branch-detail">
                  <span className="detail-icon">📍</span>
                  <div className="detail-text">
                    <strong>Address:</strong>
                    <span>Nandanvan, Nagpur</span>
                  </div>
                </div>
              </div>

              <div className="branch-actions">
                <a
                  href="https://maps.app.goo.gl/V1ndpkFPRj7YVJCs9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>📍 Get Directions</span>
                </a>

                <a
                  href="https://wa.me/918668641503?text=Hello%20Shree%20Tiles%20(Nagpur)%2C%20I%20have%20a%20question%20about%20your%20tiles."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <span>💬 WhatsApp Nagpur</span>
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
                title="Nagpur Branch Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <span className="contact-badge">Get in Touch</span>
              <h2>Contact Shree Tiles Service Pvt. Ltd.</h2>
              <p>
                For inquiries, bulk orders, pricing details or installment facility,
                contact any of our branches directly.
              </p>

              <div className="contact-features">
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Free Consultation</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Easy Installments</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Bulk Orders</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Expert Advice</span>
                </div>
              </div>

              <div className="contact-cards">
                <div className="contact-card">
                  <span className="card-icon">🏛️</span>
                  <div>
                    <h4>Balaghat Branch</h4>
                    <p>Awalazari, Balaghat</p>
                    <a href="tel:+919623640081">+91 96236 40081</a>
                  </div>
                </div>

                <div className="contact-card">
                  <span className="card-icon">🏛️</span>
                  <div>
                    <h4>Nagpur Branch</h4>
                    <p>Nandanvan, Nagpur</p>
                    <a href="tel:+919623640081">+91 96236 40081</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <div className="cta-content">
                <h3>Need Help Choosing Tiles?</h3>
                <p>Our experts are here to help you 9 AM - 9 PM</p>
                <a href="tel:+919623640081" className="btn-primary btn-large">
                  <span>📞 Call Us Now</span>
                </a>
                <p className="cta-note">Or visit any of our branches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="footer-logo-icon">श्री</div>
              <div>
                <h3>Shree Tiles Service Pvt. Ltd.</h3>
                <p>Premium Tiles Since 2013</p>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#collection">Collection</a></li>
                  <li><a href="#branches">Branches</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Branches</h4>
                <ul>
                  <li>Balaghat – Awalazari</li>
                  <li>Nagpur – Nandanvan</li>
                  <li>⏰ 9 AM – 9 PM</li>
                  <li>Open All Days</li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Contact</h4>
                <ul>
                  <li><a href="tel:+919623640081">📞 96236 40081</a></li>
                  <li><a href="tel:+918668641503">📞 86686 41503</a></li>
                  <li><a href="https://wa.me/919623640081">💬 WhatsApp</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 Shree Tiles Service Pvt. Ltd. All rights reserved.</p>
            <p>Operating since 2013 | 2000+ Customers | 2000+ Projects</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919623640081?text=Hello%20Shree%20Tiles%2C%20I%20have%20a%20question%20about%20your%20tiles."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
      >
        <span className="whatsapp-icon">💬</span>
        <span className="whatsapp-tooltip">Chat with us</span>
      </a>

      {/* Back to Top Button */}
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </>
  );
}