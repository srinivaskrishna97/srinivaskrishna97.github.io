import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <header className="header">
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      <div className="container">
        <div className="header-content">
          <h1 className="name">Srinivas Krishna</h1>
          <h2 className="title">Senior Java Developer</h2>
          <p className="tagline">Crafting innovative solutions with cutting-edge technologies and passionate expertise</p>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('summary')} className="nav-link">Summary</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
          <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
