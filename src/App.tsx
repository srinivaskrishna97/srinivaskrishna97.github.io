import React from 'react';
import './App.css';
import {
  Header,
  ProfessionalSummary,
  TechnicalSkills,
  WorkExperience,
  Education,
  Footer
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProfessionalSummary />
        <TechnicalSkills />
        <WorkExperience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
