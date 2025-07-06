import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Moon, Sun, Globe } from 'lucide-react';

const SnowflakeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V22M12 2L8 6M12 2L16 6M12 22L8 18M12 22L16 18M22 12H2M22 12L18 8M22 12L18 16M2 12L6 8M2 12L6 16M17 7L7 17M17 7L13 11M17 7L21 3M7 17L11 13M7 17L3 21M7 7L17 17M7 7L11 11M7 7L3 3M17 17L13 13M17 17L21 21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DiscordAvatar = ({ size = 40, className = "", imageUrl = null }) => {
  const sorinhaPhotoUrl = "https://smilehouseofficial.com/cdn/shop/files/5_6c415158-cc2a-4a76-a304-3c213e9a5ad3.jpg?v=1713623920";
  
  if (imageUrl || sorinhaPhotoUrl) {
    return (
      <div 
        className={`rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 ${className}`} 
        style={{ width: size, height: size }}
      >
        <img 
          src={imageUrl || sorinhaPhotoUrl} 
          alt="Sorinha" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = '<span class="text-white font-bold text-sm flex items-center justify-center w-full h-full">S</span>';
          }}
        />
      </div>
    );
  }
  
  return (
    <div 
      className={`rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      <span className="text-white font-bold text-sm">S</span>
    </div>
  );
};

const SnowParticle = ({ delay, duration, left, isAvatar = false }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!shouldAnimate) return null;

  const snowfallStyle = {
    position: 'fixed',
    left: `${left}%`,
    top: '-20px',
    pointerEvents: 'none',
    zIndex: 10,
    animation: `snowfall ${duration}s linear infinite`,
    animationDelay: `${delay}ms`
  };

  return (
    <div style={snowfallStyle}>
      {isAvatar ? (
        <DiscordAvatar size={24} className="opacity-80" imageUrl="https://smilehouseofficial.com/cdn/shop/files/5_6c415158-cc2a-4a76-a304-3c213e9a5ad3.jpg?v=1713623920" />
      ) : (
        <div className="text-blue-200 opacity-60">
          <SnowflakeIcon />
        </div>
      )}
    </div>
  );
};

const JingliuSite = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('pt-br');
  const [snowParticles, setSnowParticles] = useState([]);

  useEffect(() => {
    setIsLoaded(true);
    
    // Create snow particles
    const particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        id: i,
        delay: Math.random() * 5000,
        duration: 3 + Math.random() * 4,
        left: Math.random() * 100,
        isAvatar: Math.random() < 0.15
      });
    }
    setSnowParticles(particles);

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes snowfall {
        0% {
          transform: translateY(-20px) translateX(0px) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) translateX(100px) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const translations = {
    'pt-br': {
      nav: {
        home: 'Início',
        about: 'Sobre',
        abilities: 'Habilidades',
        contact: 'Contato'
      },
      hero: {
        subtitle: 'Flash Transcendente do Luofu',
        discover: 'Descobrir'
      },
      about: {
        title: 'A Lenda',
        paragraph1: 'Outrora campeã da espada do Luofu, Jingliu dominou a arte do combate baseado em gelo com precisão incomparável.',
        paragraph2: 'Agora transcendente, ela caminha entre mundos, carregando o peso de memórias esquecidas e poder infinito.',
        viewAbilities: 'Ver Habilidades'
      },
      abilities: {
        title: 'Habilidades',
        glacialSword: {
          title: 'Espada Glacial',
          description: 'Canaliza gelo eterno através de trabalho preciso de lâmina, criando ataques devastadores de geada.'
        },
        transcendentState: {
          title: 'Estado Transcendente',
          description: 'Entra em um estado elevado de combate, aumentando drasticamente o poder e a precisão.'
        },
        lunarEclipse: {
          title: 'Eclipse Lunar',
          description: 'Técnica suprema criando um domínio de frio absoluto com dano massivo em área.'
        }
      },
      stats: {
        combatRating: 'Classificação de Combate',
        element: 'Elemento',
        path: 'Caminho',
        rarity: 'Raridade'
      },
      contact: {
        title: 'Conectar',
        description: 'Explore o mundo de Honkai: Star Rail e descubra mais sobre a lendária mestra da espada.',
        officialGame: 'Jogo Oficial',
        characterGuide: 'Guia do Personagem'
      },
      footer: {
        copyright: '© 2025 Honkai: Star Rail - Criado para Sorinha',
        privacy: 'Privacidade',
        terms: 'Termos'
      }
    },
    'en': {
      nav: {
        home: 'Home',
        about: 'About',
        abilities: 'Abilities',
        contact: 'Contact'
      },
      hero: {
        subtitle: 'Transcendent Flash of the Luofu',
        discover: 'Discover'
      },
      about: {
        title: 'The Legend',
        paragraph1: 'Once the sword champion of the Luofu, Jingliu mastered the art of ice-based combat with unparalleled precision.',
        paragraph2: 'Now transcendent, she walks between worlds, carrying the weight of forgotten memories and infinite power.',
        viewAbilities: 'View Abilities'
      },
      abilities: {
        title: 'Abilities',
        glacialSword: {
          title: 'Glacial Sword',
          description: 'Channels eternal ice through precise blade work, creating devastating frost attacks.'
        },
        transcendentState: {
          title: 'Transcendent State',
          description: 'Enters a heightened state of combat, dramatically increasing power and precision.'
        },
        lunarEclipse: {
          title: 'Lunar Eclipse',
          description: 'Ultimate technique creating a domain of absolute cold with massive area damage.'
        }
      },
      stats: {
        combatRating: 'Combat Rating',
        element: 'Element',
        path: 'Path',
        rarity: 'Rarity'
      },
      contact: {
        title: 'Connect',
        description: 'Explore the world of Honkai: Star Rail and discover more about the legendary sword master.',
        officialGame: 'Official Game',
        characterGuide: 'Character Guide'
      },
      footer: {
        copyright: '© 2025 Honkai: Star Rail - Created for Sorinha',
        privacy: 'Privacy',
        terms: 'Terms'
      }
    }
  };

  const t = translations[language];

  const sections = [
    { id: 'hero', title: t.nav.home },
    { id: 'about', title: t.nav.about },
    { id: 'abilities', title: t.nav.abilities },
    { id: 'contact', title: t.nav.contact }
  ];

  const scrollToSection = (index) => {
    const element = document.getElementById(sections[index].id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt-br' ? 'en' : 'pt-br');
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-white text-gray-900';

  const navClasses = darkMode 
    ? 'bg-gray-900/80 backdrop-blur-md' 
    : 'bg-white/80 backdrop-blur-md';

  const sectionBgClasses = darkMode 
    ? 'bg-gray-800' 
    : 'bg-gray-50';

  const textSecondaryClasses = darkMode 
    ? 'text-gray-300' 
    : 'text-gray-600';

  const textMutedClasses = darkMode 
    ? 'text-gray-400' 
    : 'text-gray-500';

  const borderClasses = darkMode 
    ? 'border-white' 
    : 'border-gray-900';

  const gradientClasses = darkMode 
    ? 'from-gray-700 to-gray-800' 
    : 'from-gray-50 to-gray-100';

  const btnPrimaryClasses = darkMode 
    ? 'bg-white text-gray-900 hover:bg-gray-100' 
    : 'bg-gray-900 text-white hover:bg-gray-800';

  const btnSecondaryClasses = darkMode 
    ? 'border-white hover:bg-white hover:text-gray-900' 
    : 'border-gray-900 hover:bg-gray-900 hover:text-white';

  return (
    <div className={themeClasses}>
      {/* Snow Effect */}
      {snowParticles.map((particle) => (
        <SnowParticle
          key={particle.id}
          delay={particle.delay}
          duration={particle.duration}
          left={particle.left}
          isAvatar={particle.isAvatar}
        />
      ))}
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${navClasses}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={reloadPage}
              className="text-2xl font-light tracking-wide hover:opacity-75 transition-opacity duration-300"
            >
              Jingliu
            </button>
            <div className="hidden md:flex space-x-12">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(index)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === index 
                      ? `${darkMode ? 'text-white border-white' : 'text-gray-900 border-gray-900'} border-b` 
                      : `${textMutedClasses} hover:${darkMode ? 'text-white' : 'text-gray-900'}`
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-full transition-colors duration-300 ${textMutedClasses} hover:${darkMode ? 'text-white' : 'text-gray-900'}`}
                title={language === 'pt-br' ? 'Switch to English' : 'Alternar para Português'}
              >
                <Globe className="w-5 h-5" />
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors duration-300 ${textMutedClasses} hover:${darkMode ? 'text-white' : 'text-gray-900'}`}
                title={darkMode ? 'Modo Claro' : 'Modo Escuro'}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className={`text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-7xl md:text-9xl font-thin mb-8 tracking-tight">
            Jingliu
          </h1>
          <p className={`text-xl md:text-2xl font-light ${textSecondaryClasses} mb-12 max-w-2xl mx-auto leading-relaxed`}>
            {t.hero.subtitle}
          </p>
          <button
            onClick={() => scrollToSection(1)}
            className={`inline-flex items-center space-x-2 text-sm font-medium ${borderClasses} border-b pb-1 hover:${darkMode ? 'border-gray-300' : 'border-gray-600'} transition-colors duration-300`}
          >
            <span>{t.hero.discover}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className={`w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className={`w-full h-96 bg-gradient-to-br ${gradientClasses} rounded-sm`}></div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-tight">
                  {t.about.title}
                </h2>
                <div className={`w-16 h-px ${darkMode ? 'bg-white' : 'bg-gray-900'} mb-8`}></div>
              </div>
              
              <div className={`space-y-6 text-lg font-light leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t.about.paragraph1}
                </p>
                <p>
                  {t.about.paragraph2}
                </p>
              </div>
              
              <div className="pt-8">
                <button
                  onClick={() => scrollToSection(2)}
                  className={`inline-flex items-center space-x-2 text-sm font-medium ${borderClasses} border-b pb-1 hover:${darkMode ? 'border-gray-300' : 'border-gray-600'} transition-colors duration-300`}
                >
                  <span>{t.about.viewAbilities}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abilities Section */}
      <section id="abilities" className={`py-32 px-6 ${sectionBgClasses}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-tight">
              {t.abilities.title}
            </h2>
            <div className={`w-16 h-px ${darkMode ? 'bg-white' : 'bg-gray-900'} mx-auto`}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                number: "01",
                title: t.abilities.glacialSword.title,
                description: t.abilities.glacialSword.description
              },
              {
                number: "02",
                title: t.abilities.transcendentState.title,
                description: t.abilities.transcendentState.description
              },
              {
                number: "03",
                title: t.abilities.lunarEclipse.title,
                description: t.abilities.lunarEclipse.description
              }
            ].map((ability, index) => (
              <div key={index} className="space-y-6">
                <div className={`text-6xl font-thin ${darkMode ? 'text-gray-600' : 'text-gray-200'}`}>
                  {ability.number}
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-4 tracking-tight">
                    {ability.title}
                  </h3>
                  <p className={`${textSecondaryClasses} font-light leading-relaxed`}>
                    {ability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16">
            {[
              { number: "S+", label: t.stats.combatRating },
              { number: "Ice", label: t.stats.element },
              { number: "Destruction", label: t.stats.path },
              { number: "5★", label: t.stats.rarity }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-thin mb-4 tracking-tight">
                  {stat.number}
                </div>
                <div className={`text-sm font-medium ${textSecondaryClasses} uppercase tracking-wider`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-32 px-6 ${sectionBgClasses}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-tight">
            {t.contact.title}
          </h2>
          <div className={`w-16 h-px ${darkMode ? 'bg-white' : 'bg-gray-900'} mx-auto mb-12`}></div>
          
          <div className="space-y-8">
            <p className={`text-xl font-light ${textSecondaryClasses} max-w-2xl mx-auto leading-relaxed`}>
              {t.contact.description}
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a 
                href="https://hsr.hoyoverse.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-8 py-3 ${btnPrimaryClasses} text-sm font-medium transition-colors duration-300 inline-block`}
              >
                {t.contact.officialGame}
              </a>
              <a 
                href="https://en.wikipedia.org/wiki/Honkai:_Star_Rail" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-8 py-3 border ${btnSecondaryClasses} text-sm font-medium transition-all duration-300 inline-block`}
              >
                {t.contact.characterGuide}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className={`text-sm font-light ${textSecondaryClasses} mb-4 md:mb-0 flex items-center gap-3`}>
            <DiscordAvatar size={32} imageUrl="https://smilehouseofficial.com/cdn/shop/files/5_6c415158-cc2a-4a76-a304-3c213e9a5ad3.jpg?v=1713623920" />
            <span>{t.footer.copyright}</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className={`text-sm font-medium ${textSecondaryClasses} hover:${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              {t.footer.privacy}
            </a>
            <a href="#" className={`text-sm font-medium ${textSecondaryClasses} hover:${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              {t.footer.terms}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JingliuSite;