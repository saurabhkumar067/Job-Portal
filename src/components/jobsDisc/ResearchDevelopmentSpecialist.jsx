import React from "react";
import DiscComp from "./DiscComp";

function ResearchDevelopmentSpecialist() {
  const skills = [
    {
      span: "Programming Proficiency:",
      li: "Expertise in C++, Python, JavaScript, Solidity, Golang, Node.js.",
    },
    {
      span: "Blockchain Knowledge:",
      li: "In-depth understanding of blockchain concepts, smart contract development, and cryptographic mechanisms.",
    },
    {
      span: "Cloud Expertise",
      li: "Hands-on experience with AWS Cloud, Lambda, and Amazon Cognito.",
    },
    {
      span: "Problem-Solving & Analysis:",
      li: "Strong analytical and problem-solving skills, with a focus on data analysis and trend identification.",
    },
    {
      span: "Project Management:",
      li: "Strong project management intellect, understanding of SDLC.",
    },
    {
      span: "Experimental Design:",
      li: "Prior experience in experimental design and critical thinking.",
    },
    {
      span: "Compliance:",
      li: "Knowledge of intellectual property laws and regulations.",
    },
  ];
  const BonusSkills = [
    {
      li: "Experience with decentralized application (dApp) development and integration.",
    },
  ];
  const WeOffer = [
    {
      li: "Lead innovative blockchain projects.",
    },
  ];

  return (
    <div>
      <DiscComp
        title="Research & Development Specialist"
        company="PayME Fintech"
        location="Remote"
        jobType="Full-time"
        roleOverview="As a Research & Development Specialist, you'll be responsible for developing new products, enhancing existing solutions, and conducting in-depth research to identify market trends. You’ll collaborate with cross-functional teams to ensure alignment with organizational goals and compliance with intellectual property laws."
        skills={skills}
        BonusSkills={BonusSkills}
        WeOffer={WeOffer}
      />
    </div>
  );
}

export default ResearchDevelopmentSpecialist;
