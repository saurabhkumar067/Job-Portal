import React from "react";
import DiscComp from "./DiscComp";

function BackendDeveloperIntern() {
  const skills = [
    {
      span: "Go & Node.js:",
      li: "Build microservices and server-side apps.",
    },
    {
      span: "JavaScript:",
      li: "grasp of ES6+ and async programming.",
    },
    {
      span: "REST API:",
      li: "Design and integrate APIs with a focus on scalability and security.",
    },
    {
      span: "Database Knowledge:",
      li: "Basic understanding of SQL/NoSQL",
    },
    {
      span: "Version Control:",
      li: "Familiar with Git.",
    },
  ];
  const BonusSkills = [
    {
      li: " Experience with cloud platforms (AWS, GCP) and containerization (Docker, Kubernetes).",
    },
    {
      li: "Knowledge of blockchain concepts and how they relate to payments.",
    },
    {
      li: "Familiarity with CI/CD pipelines and automated testing.",
    },
  ];
  const WeOffer = [
    {
      li: "Opportunity to work with cutting-edge financial technologies.",
    },
    {
      li: "Collaborative and inclusive work culture.",
    },
    { li: "Mentorship from experienced developers." },
    { li: "Flexible working hours and remote work opportunities." },
    { li: "Potential for full-time employment based on performance." },
  ];

  return (
    <section>
      <DiscComp
        title="Backend Developer Intern"
        company="PayME Fintech"
        location="Remote/Flexible"
        jobType="Intership"
        roleOverview=" We're seeking a Backend Developer Intern skilled in Go, Node.js, JavaScript, and REST API integration. You'll
          help build scalable backend services, integrate APIs, and contribute
          to our innovative payment systems."
        skills={skills}
        BonusSkills={BonusSkills}
        WeOffer={WeOffer}
      />
    </section>
  );
}

export default BackendDeveloperIntern;
