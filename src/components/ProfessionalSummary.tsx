import React from 'react';

const ProfessionalSummary: React.FC = () => {
  return (
    <section id="summary" className="section professional-summary">
      <div className="container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="summary-content">
          <p>
            Experienced Software Engineer with 6+ years of expertise in Software Development Life Cycle (SDLC), 
            specializing in requirements analysis, design, development, testing, and deployment of enterprise applications 
            in dynamic environments.
          </p>
          <ul className="summary-highlights">
            <li>
              <strong>Backend Excellence:</strong> Expert in Java, Spring Boot, Spring MVC, Hibernate, JPA, 
              and RESTful web services development
            </li>
            <li>
              <strong>Modern Architecture:</strong> Proficient in microservices architecture, containerization with Docker, 
              and cloud deployment on AWS and GCP
            </li>
            <li>
              <strong>Full-Stack Development:</strong> Strong experience with React.js, Angular, TypeScript, and modern 
              frontend technologies for building responsive single-page applications
            </li>
            <li>
              <strong>Agile Methodology:</strong> Extensive experience with Scrum, Sprint cycles, daily standups, 
              and collaborative development practices
            </li>
            <li>
              <strong>Database Technologies:</strong> Expertise in both SQL (Oracle, MySQL, PostgreSQL) and 
              NoSQL databases (MongoDB, Cassandra)
            </li>
            <li>
              <strong>Message Queues & Streaming:</strong> Hands-on experience with Apache Kafka, RabbitMQ, 
              and event-driven architectures
            </li>
            <li>
              <strong>DevOps & CI/CD:</strong> Proficient in Jenkins, Docker, Kubernetes, Maven, and 
              automated deployment pipelines
            </li>
            <li>
              <strong>Design Patterns:</strong> Strong understanding of MVC, DAO, Singleton, Factory, 
              and other enterprise design patterns
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
