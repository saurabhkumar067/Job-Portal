import React from "react";
import DiscComp from "./DiscComp";

function AutomationOperative() {
  const skills = [
    {
      span: "Scripting Languages:",
      li: "Proficiency in Python, Bash, or similar",
    },
    {
      span: "Linux OS:",
      li: "Hands-on experience with Kali Linux.",
    },
    {
      span: "Automation Tools:",
      li: "Experience with tools like Selenium, Ansible, etc.",
    },
    {
      span: "CI/CD:",
      li: "Understanding of continuous integration and deployment practices.",
    },
    {
      span: "Version Control:",
      li: "Familiar with Git and related workflows.",
    },
    {
      span: "Problem Solving:",
      li: "Strong analytical skills and attention to detail.",
    },
    {
      span: "Team Collaboration:",
      li: "Ability to work well in a team environment.",
    },
  ];
  const BonusSkills = [
    {
      li: "Experience with blockchain technologies and automated testing frameworks.",
    },
  ];
  const WeOffer = [
    {
      li: "Work on cutting-edge blockchain automation projects.",
    },
    {
      li: "Collaborative, remote work environment.",
    },
    { li: "Mentorship from experienced developers." },
    { li: "Mentorship and potential for career advancement." },
  ];

  return (
    <div>
      <DiscComp
        title="Automation Operative"
        company="PayME Fintech"
        location="Remote"
        jobType="Intership"
        roleOverview="As an Automation Operative, you'll be responsible for creating and managing automation scripts to optimize our blockchain operations. You'll work closely with our development and operations teams to streamline workflows and ensure efficiency in a fast-paced environment."
        skills={skills}
        BonusSkills={BonusSkills}
        WeOffer={WeOffer}
      />
    </div>
  );
}

export default AutomationOperative;
