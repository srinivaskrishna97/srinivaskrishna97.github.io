import React from 'react';

const Header: React.FC = () => {
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
          <a href="#summary" className="nav-link">Summary</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#education" className="nav-link">Education</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
