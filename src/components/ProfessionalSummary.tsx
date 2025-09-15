import React from 'react';

const ProfessionalSummary: React.FC = () => {
  return (
    <section id="summary" className="section professional-summary">
      <div className="container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="summary-content">
          <p className="intro-text">
            Passionate Senior Java Developer with 6+ years of expertise in building scalable, high-performance enterprise applications. Specialized in modern Java ecosystems, cloud-native architectures, and full-stack development with a focus on innovation and excellence.
          </p>
          <ul className="summary-highlights">
            <li>
              <strong>🚀 Backend Mastery</strong>
              <p>Expert in Java 17+, Spring Boot 3.x, microservices architecture, and high-performance RESTful APIs serving millions of requests daily</p>
            </li>
            <li>
              <strong>☁️ Cloud-Native Solutions</strong>
              <p>Proficient in AWS, GCP, Docker, Kubernetes, and serverless architectures for scalable, resilient applications</p>
            </li>
            <li>
              <strong>💻 Full-Stack Excellence</strong>
              <p>Advanced skills in React 18+, Angular 16+, TypeScript, and modern frontend frameworks for exceptional user experiences</p>
            </li>
            <li>
              <strong>⚡ Performance Optimization</strong>
              <p>Specialized in database optimization, caching strategies, and system performance tuning for enterprise-scale applications</p>
            </li>
            <li>
              <strong>🗄️ Data Engineering</strong>
              <p>Expert in PostgreSQL, MongoDB, Redis, and Apache Kafka for robust data processing and real-time streaming</p>
            </li>
            <li>
              <strong>🔧 DevOps & Automation</strong>
              <p>Proficient in CI/CD pipelines, Jenkins, GitLab, infrastructure as code, and automated testing frameworks</p>
            </li>
            <li>
              <strong>🎯 Agile Leadership</strong>
              <p>Experienced in Scrum methodologies, technical mentoring, and cross-functional team collaboration</p>
            </li>
            <li>
              <strong>🏗️ Architecture Design</strong>
              <p>Strong foundation in design patterns, clean architecture, and scalable system design principles</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
