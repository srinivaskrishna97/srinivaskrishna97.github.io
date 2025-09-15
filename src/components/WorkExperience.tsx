import React from 'react';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      position: "Technical Lead",
      duration: "Oct 2022 – Present",
      responsibilities: [
        "Architected and developed microservices using Spring Boot 3.x with embedded Tomcat, implementing RESTful APIs serving 10M+ daily requests",
        "Designed cloud-native applications on Google Cloud Platform using Kubernetes Engine, Cloud Functions, and Cloud Run for improved scalability",
        "Implemented event-driven architecture using Apache Kafka for real-time data processing and messaging between services",
        "Built responsive single-page applications with React 18+ and TypeScript, integrating with backend APIs",
        "Utilized Docker and Kubernetes for containerization and orchestration, reducing deployment time by 60%",
        "Implemented comprehensive testing strategies using JUnit 5, Mockito, and TestContainers with 90%+ code coverage",
        "Optimized database performance using JPA/Hibernate with PostgreSQL, implementing efficient caching strategies",
        "Integrated CI/CD pipelines using Jenkins and GitLab, automating build, test, and deployment processes"
      ],
      technologies: ["Java 17", "Spring Boot 3.x", "React 18", "TypeScript", "PostgreSQL", "Apache Kafka", "Docker", "Kubernetes", "GCP", "Jenkins"]
    },
    {
      position: "Backend Java Developer",
      duration: "Oct 2021 – Sep 2022",
      responsibilities: [
        "Developed enterprise-grade applications using Spring MVC framework with Hibernate for data persistence",
        "Implemented message-driven architecture using Kafka Producer/Consumer APIs for high-throughput data processing",
        "Built Angular 16+ components with TypeScript for dynamic user interfaces and improved user experience",
        "Designed and optimized complex SQL queries and stored procedures for Oracle and MySQL databases",
        "Implemented exactly-once semantics using Kafka Streams for reliable message processing",
        "Developed multithreaded ETL processes for distributed XML data loading using JPA/Hibernate",
        "Utilized Java 8+ features including Lambda expressions, Streams API, and functional interfaces",
        "Integrated version control workflows using Git with feature branching and pull request reviews"
      ],
      technologies: ["Java 11", "Spring MVC", "Angular 16", "Hibernate", "Apache Kafka", "Oracle", "MySQL", "Docker", "Maven", "Git"]
    },
    {
      position: "Java Developer",
      duration: "Oct 2019 – Sep 2021",
      responsibilities: [
        "Developed complex web services using JAX-RS APIs tailored to specific business requirements",
        "Implemented business logic using Spring Core framework with Hibernate ORM for data access layer",
        "Built responsive web applications using Angular 4+ with Bootstrap for cross-platform compatibility",
        "Designed and implemented MongoDB database solutions for document storage and retrieval",
        "Utilized AWS services including EC2, S3, RDS, and IAM for cloud infrastructure management",
        "Implemented business rules validation using Drools Rules Engine for complex decision logic",
        "Developed RESTful microservices with comprehensive API documentation and testing using Postman",
        "Applied Java 8+ features including Stream APIs, Lambda expressions, and enhanced collection processing"
      ],
      technologies: ["Java 8", "Spring Core", "Angular 4", "JAX-RS", "MongoDB", "AWS", "Drools", "Bootstrap", "Maven", "Postman"]
    },
    {
      position: "Junior Java Developer", 
      duration: "Mar 2018 – Sep 2019",
      responsibilities: [
        "Developed applications using Spring Framework with dependency injection and MVC architecture",
        "Implemented object-relational mapping using Hibernate ORM for seamless database integration",
        "Built RESTful web services and SOAP services for inter-system communication",
        "Worked with NoSQL databases including Cassandra and MongoDB for scalable data storage",
        "Developed containerized applications using Docker for consistent deployment environments",
        "Applied Test-Driven Development (TDD) and Behavior-Driven Development (BDD) methodologies",
        "Created and optimized SQL queries, stored procedures, and database scripts",
        "Gained experience with Apache Tomcat application server configuration and deployment"
      ],
      technologies: ["Java 8", "Spring Framework", "Hibernate", "RESTful Services", "Docker", "Cassandra", "MongoDB", "Apache Tomcat", "JUnit"]
    }
  ];

  return (
    <section id="experience" className="section work-experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="position">{experience.position}</h3>
                <div className="experience-meta">
                  <span className="duration">{experience.duration}</span>
                </div>
              </div>
              <div className="experience-content">
                <ul className="responsibilities">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
                <div className="technologies">
                  <h4>Key Technologies:</h4>
                  <div className="tech-tags">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
