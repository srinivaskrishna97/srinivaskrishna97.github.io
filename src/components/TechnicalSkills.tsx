import React from 'react';

const TechnicalSkills: React.FC = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java 17+", "TypeScript", "JavaScript ES6+", "Python", "SQL", "Shell Scripting"]
    },
    {
      category: "Backend Frameworks",
      skills: ["Spring Boot 3.x", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate 6.x", "JAX-RS", "JAX-WS"]
    },
    {
      category: "Frontend Technologies",
      skills: ["React 18+", "Angular 16+", "TypeScript", "HTML5", "CSS3", "Sass/SCSS", "Bootstrap", "Material-UI"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "Cassandra", "H2 Database"]
    },
    {
      category: "Message Queues & Streaming",
      skills: ["Apache Kafka", "RabbitMQ", "Apache Pulsar", "AWS SQS", "Google Pub/Sub"]
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS (EC2, S3, RDS, Lambda)", "Google Cloud Platform", "Azure", "Docker", "Kubernetes"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Jenkins", "GitLab CI/CD", "Docker", "Kubernetes", "Maven", "Gradle", "SonarQube"]
    },
    {
      category: "Testing Frameworks",
      skills: ["JUnit 5", "Mockito", "TestContainers", "Jest", "React Testing Library", "Cypress"]
    },
    {
      category: "Version Control & IDE",
      skills: ["Git", "GitHub", "GitLab", "IntelliJ IDEA", "VS Code", "Eclipse"]
    },
    {
      category: "Monitoring & APM",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Splunk", "New Relic", "AppDynamics"]
    }
  ];

  return (
    <section id="skills" className="section technical-skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
