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
      {/* <div className=" mx-36 mt-10">
        <h2 className="font-semibold text-xl">
          Job Title: Backend Developer Intern
        </h2>
        <div className="my-5">
          <div>
            <span className="font-medium">Company:</span> PayME Fintech
          </div>
          <div>
            <span className="font-medium">Location:</span> Remote/Flexible
          </div>
          <div>
            <span className="font-medium">Type:</span> Intership
          </div>
        </div>
        <h3 className="font-semibold text-lg">About Us:</h3>
        <p className="my-4 text-gray-700">
          At PayME, our mission is to transform the financial landscape by
          delivering secure, transparent, and decentralized payment solutions
          through the power of blockchain technology. We strive to build a world
          where every transaction is safe, seamless, and trustworthy—empowering
          businesses and individuals to take full control of their financial
          activities.
        </p>
        <h3 className="font-semibold text-lg">Role Overview:</h3>
        <p className="my-4 text-gray-700">
          We're seeking a{" "}
          <span className="font-semibold">Backend Developer Intern</span>{" "}
          skilled in Go, Node.js, JavaScript, and{" "}
          <span className="font-semibold">REST API integration</span>. You'll
          help build scalable backend services, integrate APIs, and contribute
          to our innovative payment systems.
        </p>
        <h3 className="font-semibold text-lg">Key Skills:</h3>
        <ul className="my-4 list-disc px-16 text-gray-700">
          <li>
            <span className="font-semibold text-black">Go & Node.js: </span>
            Build microservices and server-side apps.
          </li>
          <li>
            <span className="font-semibold text-black">JavaScript:</span> Strong
            grasp of ES6+ and async programming.
          </li>
          <li>
            <span className="font-semibold text-black">REST API:</span> Design
            and integrate APIs with a focus on scalability and security.
          </li>
          <li>
            <span className="font-semibold text-black">
              Database Knowledge:
            </span>{" "}
            Basic understanding of SQL/NoSQL
          </li>
          <li>
            <span className="font-semibold text-black">Version Control:</span>{" "}
            Familiar with Git.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">What We Offer:</h3>
        <ul className="my-4 list-disc px-16 text-gray-700">
          <li>Opportunity to work with cutting-edge financial technologies.</li>
          <li>Collaborative and inclusive work culture.</li>
          <li>Mentorship from experienced developers.</li>
          <li>Flexible working hours and remote work opportunities.</li>
          <li>Potential for full-time employment based on performance.</li>
        </ul>
        <h3 className="font-semibold text-lg">Bonus Skills:</h3>
        <ul className="my-4 list-disc px-16 text-gray-700">
          <li>
            Experience with cloud platforms (AWS, GCP) and containerization
            (Docker, Kubernetes).
          </li>
          <li>
            Knowledge of blockchain concepts and how they relate to payments.
          </li>
          <li>Familiarity with CI/CD pipelines and automated testing.</li>
        </ul>
        <div className="w-full m-auto flex justify-center items-center">
          <button className="bg-[#93C47D] py-2 px-6 text-2xl font-bold  my-5 mt-4 hover:bg-[#b3e29d] duration-500">
            Apply
          </button>
        </div>
      </div> */}
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
