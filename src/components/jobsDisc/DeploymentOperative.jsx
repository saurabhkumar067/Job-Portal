import React from "react";
import DiscComp from "./DiscComp";

function DeploymentOperative() {
  const skills = [
    {
      span: "Deployment Tools:",
      li: "Experience with Jenkins, Docker, or Kubernetes.",
    },
    {
      span: "Cloud Platforms:",
      li: "Familiarity with AWS, Azure, or Google Cloud.",
    },
    {
      span: "Scripting Languages:",
      li: "Basic knowledge of Bash, Python, Node.js, or Golang.",
    },
    {
      span: "Version Control:",
      li: "Experience with Git.",
    },
    {
      span: "Networking & System Admin:",
      li: " Basic understanding of networking and system administration.",
    },
    {
      span: "Problem Solving:",
      li: "Strong troubleshooting and attention to detail.",
    },
    {
      span: "Team Collaboration:",
      li: "Ability to work well in a collaborative team setting.",
    },
  ];
  const BonusSkills = [
    {
      li: "Knowledge of blockchain technology and automated deployment tools.",
    },
  ];
  const WeOffer = [
    {
      li: "Work with innovative blockchain technology.",
    },
    {
      li: "Remote, collaborative work environment.",
    },
    { li: "Career growth opportunities." },
  ];

  return (
    <div>
      <DiscComp
        title="Deployment Operative"
        company="PayME Fintech"
        location="Remote"
        jobType="Intership"
        roleOverview="As a Deployment Operative, you’ll be responsible for deploying and maintaining our blockchain systems, monitoring performance, automating deployment processes, and collaborating with developers to ensure smooth system updates."
        skills={skills}
        BonusSkills={BonusSkills}
        WeOffer={WeOffer}
      />
    </div>
  );
}

export default DeploymentOperative;
