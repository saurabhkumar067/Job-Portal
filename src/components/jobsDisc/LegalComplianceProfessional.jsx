import React from "react";
import DiscComp from "./DiscComp";

function DeploymentOperative() {
  const skills = [
    {
      span: "Corporate Law:",
      li: "Strong understanding of Indian corporate laws and regulations.",
    },
    {
      span: "Compliance Management:",
      li: "Experience with developing compliance programs and risk management strategies.",
    },
    {
      span: "Contract Management:",
      li: "Proficiency in handling contract reviews and legal disputes.",
    },
    {
      span: "Industry Standards:",
      li: "Familiarity with CIS benchmarks, PCIDSS, and NIST frameworks.",
    },
    {
      span: "Ethical Judgment:",
      li: "High standards of integrity and legal ethics.",
    },
    {
      span: "Virtual Compliance Tools:",
      li: "Knowledge of compliance management tools.",
    },
  ];
  const BonusSkills = [
    {
      li: "Industry-specific legal experience in fintech or blockchain.",
    },
  ];
  const WeOffer = [
    {
      li: "Work in a dynamic and fast-paced environment.",
    },
    {
      li: "Remote work flexibility.",
    },
  ];

  return (
    <div>
      <DiscComp
        title="Legal & Compliance Professional"
        company="PayME Fintech"
        location="Remote"
        jobType="Intership"
        roleOverview="As a Legal & Compliance Professional, you will provide legal counsel, manage compliance activities, and oversee corporate governance practices. You'll also manage risk and ensure adherence to Indian laws and regulations, playing a crucial role in maintaining ethical standards within the organization."
        skills={skills}
        BonusSkills={BonusSkills}
        WeOffer={WeOffer}
      />
    </div>
  );
}

export default DeploymentOperative;
