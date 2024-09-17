import React, { useState } from "react";
import LaptopImg from "../../assets/laptop-computer-icon.png";
import Cards from "./Cards";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Post({ searchInput, selectedContract, showRemoteJobs }) {
  const vacancy = [
    {
      id: 1,
      img: LaptopImg,
      postName: "Backend Developer Intern",
      typesLocation: "Hybrid",
      workLocation: "Remote/Flexible",
      salary: "Not mentioned",
      jobPostTime: "Today",
      Contract: "Internship",
      NavLinkName: "/backend_developer-intern",
    },
    {
      id: 2,
      img: LaptopImg,
      postName: "Animator Intern",
      typesLocation: "Hybrid",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "1 day ago",
      Contract: "Contract",
      NavLinkName: "/animator-intern",
    },
    {
      id: 3,
      img: LaptopImg,
      postName: "Automation Operative",
      typesLocation: "Hybrid",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "2 days ago",
      Contract: "Temporary",
      NavLinkName: "/automation_operative",
    },
    {
      id: 4,
      img: LaptopImg,
      postName: "Deployment Operative",
      typesLocation: "Hybrid",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "1 month ago",
      Contract: "Internship",
      NavLinkName: "/deployment_operative",
    },
    {
      id: 5,
      img: LaptopImg,
      postName: "Legal & Compliance Professional",
      typesLocation: "Hybrid",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "1 month ago",
      Contract: "Full-time",
      NavLinkName: "/legal_compliance-professional",
    },
    {
      id: 6,
      img: LaptopImg,
      postName: "Research & Development Specialist",
      typesLocation: "Hybrid",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "1 month ago",
      Contract: "Internship",
      NavLinkName: "/research_development_specialist",
    },
  ];

  // Filter vacancies based on search input, selected contract, and remote jobs
  const filteredVacancies = vacancy
    .filter((item) =>
      item.postName.toLowerCase().includes(searchInput.toLowerCase())
    )
    .filter((item) =>
      selectedContract ? item.Contract === selectedContract : true
    )
    .filter((item) =>
      showRemoteJobs ? item.workLocation.toLowerCase().includes("remote") : true
    );

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(filteredVacancies.length / jobsPerPage);

  // Get current jobs based on page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredVacancies.slice(indexOfFirstJob, indexOfLastJob);

  // Handle next and previous page clicks
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="w-[75%] xs:w-full xs:mt-5 md:mt-0 md:w-[65%] lg:w-[75%]">
      <div className="cards flex flex-col gap-3">
        {currentJobs.length > 0 ? (
          currentJobs.map((item) => {
            const {
              id,
              img,
              postName,
              typesLocation,
              workLocation,
              salary,
              jobPostTime,
              Contract,
              NavLinkName,
            } = item;
            return (
              <Cards
                key={id}
                img={img}
                postName={postName}
                typesLocation={typesLocation}
                workLocation={workLocation}
                salary={salary}
                jobPostTime={jobPostTime}
                Contract={Contract}
                id={id}
                NavLinkName={NavLinkName}
              />
            );
          })
        ) : (
          <p>No jobs found</p>
        )}
      </div>

      {/* Pagination Controls */}
      {filteredVacancies.length > jobsPerPage && (
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
          >
            <FaChevronLeft/>
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
          >
            <FaChevronRight/>
          </button>
        </div>
      )}
    </section>
  );
}

export default Post;
