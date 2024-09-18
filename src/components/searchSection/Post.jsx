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
      typesLocation: "PayME",
      workLocation: "Remote/Flexible",
      salary: "Not mentioned",
      jobPostTime: "2024-09-18",
      Contract: "Internship",
      NavLinkName: "/backend_developer-intern",
    },
    {
      id: 2,
      img: LaptopImg,
      postName: "Animator Intern",
      typesLocation: "PayME",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "2024-09-17",
       Contract: "Internship",
      NavLinkName: "/animator-intern",
    },
    {
      id: 3,
      img: LaptopImg,
      postName: "Automation Operative",
      typesLocation: "PayME",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "2024-09-15",
       Contract: "Internship",
      NavLinkName: "/automation_operative",
    },
    {
      id: 4,
      img: LaptopImg,
      postName: "Deployment Operative",
      typesLocation: "PayME",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "2024-09-15",
       Contract: "Internship",
      NavLinkName: "/deployment_operative",
    },
    {
      id: 5,
      img: LaptopImg,
      postName: "Legal & Compliance Professional",
      typesLocation: "PayME",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "2024-09-15",
       Contract: "Internship",
      NavLinkName: "/legal_compliance-professional",
    },
    {
      id: 6,
      img: LaptopImg,
      postName: "Research & Development Specialist",
      typesLocation: "PayME",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "2024-09-15",
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  // Real date 
  function getTimeDifference(jobPostTime) {
    const postDate = new Date(jobPostTime);
    const today = new Date();
    
    const timeDiff = today - postDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  
    if (daysDiff === 0) return "Today";
    if (daysDiff === 1) return "1 day ago";
    if (daysDiff < 30) return `${daysDiff} days ago`;
    const monthsDiff = Math.floor(daysDiff / 30);
    return `${monthsDiff} month${monthsDiff > 1 ? 's' : ''} ago`;
  }
  

  return (
    <section className="w-[75%] xs:w-full xs:mt-5 md:mt-0 md:w-[65%] lg:w-[75%]">
      <div className="cards flex flex-col gap-3 h-[1000px] xs:h-[unset] lg:h-[1000px]">
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
            const displayTime = getTimeDifference(jobPostTime);
            return (
              <Cards
                key={id}
                img={img}
                postName={postName}
                typesLocation={typesLocation}
                workLocation={workLocation}
                salary={salary}
                jobPostTime={displayTime}
                Contract={Contract}
                id={id}
                NavLinkName={NavLinkName}
              />
            );
          })
        ) : (
          <p>No jobs found</p>
        )}

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
      </div>

      
    </section>
  );
}

export default Post;
