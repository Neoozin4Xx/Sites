import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Shield, Users, Star, BookOpen, Sword, Heart } from 'lucide-react';

const YoruichiWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedForm, setSelectedForm] = useState('human');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const abilities = [
    {
      icon: <Zap style={{ width: '32px', height: '32px' }} />,
      title: "Flash Step Master",
      description: "Unmatched speed and agility, earning the title 'Flash Goddess'"
    },
    {
      icon: <Shield style={{ width: '32px', height: '32px' }} />,
      title: "Transformation",
      description: "Ability to transform between human and cat forms at will"
    },
    {
      icon: <Sword style={{ width: '32px', height: '32px' }} />,
      title: "Combat Expert",
      description: "Master of hand-to-hand combat and spiritual energy manipulation"
    },
    {
      icon: <Zap style={{ width: '32px', height: '32px' }} />,
      title: "Shunko Technique",
      description: "Combines martial arts with spiritual energy for devastating attacks"
    }
  ];

  const relationships = [
    { name: "Ichigo Kurosaki", relation: "Ally & Mentor", bond: 85 },
    { name: "Kisuke Urahara", relation: "Former Captain", bond: 95 },
    { name: "Sui-Feng", relation: "Former Subordinate", bond: 70 },
    { name: "Tessai Tsukabishi", relation: "Ally", bond: 80 }
  ];

  const forms = {
    human: {
      title: "Human Form",
      description: "Former Captain of the 2nd Division and Commander of the Stealth Force",
      stats: { speed: 100, strength: 85, intelligence: 90, spiritual: 95 }
    },
    cat: {
      title: "Cat Form",
      description: "Feline transformation allowing for stealth and reconnaissance",
      stats: { speed: 95, strength: 60, intelligence: 85, spiritual: 80 }
    }
  };

  const StatBar = ({ label, value, color }) => (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '4px' }}>
        <span style={{ color: '#d1d5db' }}>{label}</span>
        <span style={{ color: '#a855f7' }}>{value}%</span>
      </div>
      <div style={{ 
        width: '100%', 
        backgroundColor: '#374151', 
        borderRadius: '9999px', 
        height: '8px' 
      }}>
        <div 
          style={{
            height: '8px',
            borderRadius: '9999px',
            background: color,
            width: `${value}%`,
            transition: 'all 1s ease-out'
          }}
        />
      </div>
    </div>
  );

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #111827, #581c87, #111827)',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.3s',
      backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none'
    },
    navContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    navLinks: {
      display: 'flex',
      gap: '32px'
    },
    navLink: {
      transition: 'color 0.2s',
      cursor: 'pointer',
      color: '#d1d5db',
      textDecoration: 'none',
      border: 'none',
      background: 'none',
      fontSize: '16px'
    },
    heroSection: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    heroContent: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 16px',
      position: 'relative',
      zIndex: 10
    },
    heroAvatar: {
      width: '192px',
      height: '192px',
      margin: '0 auto 32px',
      borderRadius: '50%',
      background: 'linear-gradient(to bottom right, #a855f7, #ec4899)',
      padding: '4px',
      animation: 'pulse 2s infinite'
    },
    heroAvatarInner: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: '#111827',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '24px',
      background: 'linear-gradient(to right, #a855f7, #ec4899, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'pulse 2s infinite'
    },
    heroDescription: {
      fontSize: '20px',
      color: '#d1d5db',
      marginBottom: '32px',
      maxWidth: '600px',
      margin: '0 auto 32px',
      lineHeight: '1.6'
    },
    heroTags: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '16px',
      marginBottom: '48px'
    },
    heroTag: {
      padding: '8px 16px',
      borderRadius: '9999px',
      border: '1px solid',
      fontSize: '14px'
    },
    section: {
      padding: '80px 16px'
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '64px',
      background: 'linear-gradient(to right, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    abilitiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px',
      maxWidth: '1280px',
      margin: '0 auto'
    },
    abilityCard: {
      background: 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.5))',
      backdropFilter: 'blur(4px)',
      padding: '24px',
      borderRadius: '16px',
      border: '1px solid rgba(55, 65, 81, 0.5)',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    abilityIcon: {
      color: '#a855f7',
      marginBottom: '16px',
      transition: 'color 0.3s'
    },
    abilityTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '12px',
      color: 'white'
    },
    abilityDescription: {
      color: '#9ca3af',
      transition: 'color 0.3s'
    },
    formsSection: {
      padding: '80px 16px',
      background: 'linear-gradient(to right, rgba(17, 24, 39, 0.5), rgba(88, 28, 135, 0.2))'
    },
    formSelector: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '32px'
    },
    formSelectorContainer: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      padding: '4px',
      borderRadius: '9999px',
      backdropFilter: 'blur(4px)'
    },
    formButton: {
      padding: '12px 24px',
      borderRadius: '9999px',
      transition: 'all 0.3s',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px'
    },
    formContent: {
      background: 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.3), rgba(17, 24, 39, 0.3))',
      backdropFilter: 'blur(4px)',
      borderRadius: '24px',
      padding: '32px',
      border: '1px solid rgba(55, 65, 81, 0.5)',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      alignItems: 'center'
    },
    formTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: 'white'
    },
    formDescription: {
      color: '#d1d5db',
      fontSize: '18px',
      marginBottom: '24px',
      lineHeight: '1.6'
    },
    formAvatar: {
      width: '256px',
      height: '256px',
      borderRadius: '50%',
      background: 'linear-gradient(to bottom right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid rgba(139, 92, 246, 0.3)',
      margin: '0 auto'
    },
    relationshipsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    relationshipCard: {
      background: 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.4), rgba(17, 24, 39, 0.4))',
      backdropFilter: 'blur(4px)',
      padding: '24px',
      borderRadius: '16px',
      border: '1px solid rgba(55, 65, 81, 0.5)',
      transition: 'all 0.3s'
    },
    relationshipHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },
    relationshipName: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '4px'
    },
    relationshipRole: {
      color: '#a855f7'
    },
    relationshipBond: {
      display: 'flex',
      alignItems: 'center'
    },
    relationshipProgress: {
      width: '100%',
      backgroundColor: '#374151',
      borderRadius: '9999px',
      height: '8px'
    },
    footer: {
      padding: '48px 16px',
      backgroundColor: 'rgba(17, 24, 39, 0.8)',
      backdropFilter: 'blur(4px)',
      borderTop: '1px solid rgba(55, 65, 81, 0.5)'
    },
    footerContent: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    },
    footerLogo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '24px'
    },
    footerLogoText: {
      fontSize: '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginLeft: '12px'
    },
    footerQuote: {
      color: '#9ca3af',
      marginBottom: '16px'
    },
    footerIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px'
    },
    footerIcon: {
      color: '#6b7280',
      cursor: 'pointer',
      transition: 'color 0.3s'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .bounce {
            animation: bounce 2s infinite;
          }
          @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem !important; }
            .section-title { font-size: 2rem !important; }
            .nav-links { display: none; }
          }
        `}
      </style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>Yoruichi</div>
          <div style={styles.navLinks} className="nav-links">
            {['Home', 'Abilities', 'Forms', 'Relationships'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                style={{
                  ...styles.navLink,
                  color: activeSection === item.toLowerCase() ? '#a855f7' : '#d1d5db'
                }}
                onMouseOver={(e) => e.target.style.color = '#a855f7'}
                onMouseOut={(e) => e.target.style.color = activeSection === item.toLowerCase() ? '#a855f7' : '#d1d5db'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.heroAvatar}>
            <div style={styles.heroAvatarInner}>
              <Zap style={{ width: '80px', height: '80px', color: '#a855f7' }} />
            </div>
          </div>
          <h1 style={styles.heroTitle} className="hero-title">Yoruichi Shihouin</h1>
          <p style={styles.heroDescription}>
            The Flash Goddess of the Soul Society. Former Captain of the 2nd Division and master of the ancient art of Shunko.
          </p>
          <div style={styles.heroTags}>
            <span style={{
              ...styles.heroTag,
              backgroundColor: 'rgba(139, 92, 246, 0.3)',
              color: '#c4b5fd',
              borderColor: 'rgba(139, 92, 246, 0.5)'
            }}>
              Flash Step Master
            </span>
            <span style={{
              ...styles.heroTag,
              backgroundColor: 'rgba(236, 72, 153, 0.3)',
              color: '#f9a8d4',
              borderColor: 'rgba(236, 72, 153, 0.5)'
            }}>
              Shape Shifter
            </span>
            <span style={{
              ...styles.heroTag,
              backgroundColor: 'rgba(59, 130, 246, 0.3)',
              color: '#93c5fd',
              borderColor: 'rgba(59, 130, 246, 0.5)'
            }}>
              Former Captain
            </span>
          </div>
          <ChevronDown style={{ width: '32px', height: '32px', margin: '0 auto', color: '#a855f7' }} className="bounce" />
        </div>
      </section>

      {/* Abilities Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle} className="section-title">Combat Abilities</h2>
        <div style={styles.abilitiesGrid}>
          {abilities.map((ability, index) => (
            <div 
              key={index}
              style={styles.abilityCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                e.currentTarget.querySelector('.ability-icon').style.color = '#ec4899';
                e.currentTarget.querySelector('.ability-description').style.color = '#d1d5db';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(55, 65, 81, 0.5)';
                e.currentTarget.querySelector('.ability-icon').style.color = '#a855f7';
                e.currentTarget.querySelector('.ability-description').style.color = '#9ca3af';
              }}
            >
              <div style={styles.abilityIcon} className="ability-icon">
                {ability.icon}
              </div>
              <h3 style={styles.abilityTitle}>{ability.title}</h3>
              <p style={styles.abilityDescription} className="ability-description">
                {ability.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Forms Section */}
      <section style={styles.formsSection}>
        <h2 style={styles.sectionTitle} className="section-title">Transformation Forms</h2>
        <div style={styles.formSelector}>
          <div style={styles.formSelectorContainer}>
            {Object.keys(forms).map((form) => (
              <button
                key={form}
                onClick={() => setSelectedForm(form)}
                style={{
                  ...styles.formButton,
                  background: selectedForm === form 
                    ? 'linear-gradient(to right, #a855f7, #ec4899)' 
                    : 'transparent',
                  color: selectedForm === form ? 'white' : '#9ca3af'
                }}
                onMouseOver={(e) => {
                  if (selectedForm !== form) {
                    e.target.style.color = 'white';
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedForm !== form) {
                    e.target.style.color = '#9ca3af';
                  }
                }}
              >
                {forms[form].title}
              </button>
            ))}
          </div>
        </div>
        <div style={styles.formContent}>
          <div style={styles.formGrid}>
            <div>
              <h3 style={styles.formTitle}>{forms[selectedForm].title}</h3>
              <p style={styles.formDescription}>
                {forms[selectedForm].description}
              </p>
              <div>
                <StatBar label="Speed" value={forms[selectedForm].stats.speed} color="linear-gradient(to right, #a855f7, #ec4899)" />
                <StatBar label="Strength" value={forms[selectedForm].stats.strength} color="linear-gradient(to right, #ef4444, #f97316)" />
                <StatBar label="Intelligence" value={forms[selectedForm].stats.intelligence} color="linear-gradient(to right, #3b82f6, #06b6d4)" />
                <StatBar label="Spiritual Power" value={forms[selectedForm].stats.spiritual} color="linear-gradient(to right, #10b981, #059669)" />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={styles.formAvatar}>
                {selectedForm === 'human' ? (
                  <Users style={{ width: '96px', height: '96px', color: '#a855f7' }} />
                ) : (
                  <Heart style={{ width: '96px', height: '96px', color: '#ec4899' }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relationships Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle} className="section-title">Key Relationships</h2>
        <div style={styles.relationshipsGrid}>
          {relationships.map((rel, index) => (
            <div 
              key={index}
              style={styles.relationshipCard}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(55, 65, 81, 0.5)';
              }}
            >
              <div style={styles.relationshipHeader}>
                <div>
                  <h3 style={styles.relationshipName}>{rel.name}</h3>
                  <p style={styles.relationshipRole}>{rel.relation}</p>
                </div>
                <div style={styles.relationshipBond}>
                  <Star style={{ width: '20px', height: '20px', color: '#fbbf24', marginRight: '4px' }} />
                  <span style={{ color: '#fbbf24', fontWeight: '600' }}>{rel.bond}%</span>
                </div>
              </div>
              <div style={styles.relationshipProgress}>
                <div 
                  style={{
                    height: '8px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(to right, #a855f7, #ec4899)',
                    width: `${rel.bond}%`,
                    transition: 'all 1s ease-out'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLogo}>
            <Zap style={{ width: '32px', height: '32px', color: '#a855f7' }} />
            <span style={styles.footerLogoText}>Yoruichi Shihouin</span>
          </div>
          <p style={styles.footerQuote}>
            "I may be a cat, but I'm not one to be underestimated."
          </p>
          <div style={styles.footerIcons}>
            <BookOpen 
              style={styles.footerIcon}
              onMouseOver={(e) => e.target.style.color = '#a855f7'}
              onMouseOut={(e) => e.target.style.color = '#6b7280'}
            />
            <Users 
              style={styles.footerIcon}
              onMouseOver={(e) => e.target.style.color = '#a855f7'}
              onMouseOut={(e) => e.target.style.color = '#6b7280'}
            />
            <Star 
              style={styles.footerIcon}
              onMouseOver={(e) => e.target.style.color = '#a855f7'}
              onMouseOut={(e) => e.target.style.color = '#6b7280'}
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YoruichiWebsite;