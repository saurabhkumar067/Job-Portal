import React from "react";
import DiscComp from "./DiscComp";

function AnimatorIntern() {
  const skills = [
    {
      span: "Animation Software:",
      li: "Proficient in tools like Adobe Animate, Toon Boom Harmony, or Autodesk Maya.",
    },
    {
      span: "Animation Principles:",
      li: "Strong understanding of timing, weight, and movement.",
    },
    {
      span: "2D/3D Animation:",
      li: "Experience in character animation and lip-syncing.",
    },
    {
      span: "Storyboarding:",
      li: " Ability to create storyboards and animatics to plan sequences",
    },
    {
      span: "Team Collaboration:",
      li: "Excellent teamwork and communication skills.",
    },
  ];
  const BonusSkills = [
    {
      li: "Knowledge of the latest animation trends and techniques.",
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
    <div>
      <DiscComp
        title="Animator Intern"
        company="PayME Fintech"
        location="Remote"
        jobType="Intership"
        roleOverview="As an Animator Intern, you'll collaborate with the creative team to produce engaging animations that inspire audiences. You'll use various animation techniques, including 2D, 3D, and traditional methods, to bring characters, objects, and environments to life."
        skills={skills}
        BonusSkills={BonusSkills}
        WeOffer={WeOffer}
      />
    </div>
  );
}

export default AnimatorIntern;
