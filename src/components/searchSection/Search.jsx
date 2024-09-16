import React, { useRef, useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState([]);
  // const divRef = useRef(null);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value)
    console.log(searchInput)
  };

  return (
    <section className="w-[25%] xs:w-full md:w-[35%]">
      <div className="border-2 p-3 rounded-xl">
        <div>
          <label htmlFor="title" className="font-semibold">
            Search
          </label>
          <input
            // ref={divRef}
            value={searchInput}
            onChange={handleSearchInputChange}
            type="text"
            name="title"
            id="title"
            placeholder="Title, company, etc."
            className="border-[1px] rounded-md py-2 px-2 outline-gray-300 w-full mt-1"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="types" className="font-semibold">
            Type
          </label>
          <select
            name="types"
            id=""
            className="border-[1px] rounded-md py-2 px-2 outline-gray-300 w-full mt-2"
          >
            <option value="">All types</option>
            <option value="">Full-time</option>
            <option value="">Part-time</option>
            <option value="">Contract</option>
            <option value="">Temporary</option>
            <option value="">Internship</option>
            <option value="">Volunteer</option>
          </select>
        </div>
        <div className="mt-5">
          <label htmlFor="locations" className="font-semibold">
            Location
          </label>
          <select
            name="locations"
            id=""
            className="border-[1px] rounded-md py-2 px-2 outline-gray-300 w-full mt-1"
          >
            <option value="">All locations</option>
            <option value="bangalore">Bangalore, India</option>
            <option value="mumbai">Mumbai, India</option>
            <option value="delhi">Delhi, India</option>
            <option value="chennai">Chennai, India</option>
            <option value="hyderabad">Hyderabad, India</option>
            <option value="pune">Pune, India</option>
            <option value="kolkata">Kolkata, India</option>
            <option value="gurugram">Gurugram, India</option>
            <option value="ahmedabad">Ahmedabad, India</option>
            <option value="noida">Noida, India</option>
            <option value="jaipur">Jaipur, India</option>
            <option value="chandigarh">Chandigarh, India</option>
            <option value="kochi">Kochi, India</option>
            <option value="indore">Indore, India</option>
            <option value="lucknow">Lucknow, India</option>
            <option value="colombo">Colombo, Sri Lanka</option>
            <option value="kathmandu">Kathmandu, Nepal</option>
            <option value="dhaka">Dhaka, Bangladesh</option>
            <option value="thimphu">Thimphu, Bhutan</option>
            <option value="male">Male, Maldives</option>
          </select>
        </div>
        <div className="my-3">
          <input
            type="checkbox"
            name="remoteJobs"
            id="remoteJobs"
            className="mr-2"
          />
          <label htmlFor="remoteJobs">Remote jobs</label>
        </div>
        <button className="w-full py-2 bg-[#0F172A] text-white rounded-lg hover:bg-[#1b2742] duration-500 ">
          Filter jobs
        </button>
      </div>
    </section>
  );
}

export default Search;
