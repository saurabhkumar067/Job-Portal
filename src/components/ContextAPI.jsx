import { createContext } from "react";
import LaptopImg from "../assets/laptop-computer-icon.png";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const [vacancy, setVacancy] = [
    {
      id: 1,
      img: LaptopImg,
      postName: "Senior Rust developer",
      typesLocation: "Hybrid",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "8 months ago",
      Contract: "Full-time",
    },
    {
      id: 2,
      img: LaptopImg,
      postName: "Senior Rust developer",
      typesLocation: "Hybrid",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "8 months ago",
      Contract: "Contract",
    },
    {
      id: 3,
      img: LaptopImg,
      postName: "Senior Rust developer",
      typesLocation: "Hybrid",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "8 months ago",
      Contract: "Temporary",
    },
    {
      id: 4,
      img: LaptopImg,
      postName: "Senior Rust developer",
      typesLocation: "Hybrid",
      workLocation: "Remote",
      salary: "Not mentioned",
      jobPostTime: "8 months ago",
      Contract: "Intership",
    },
  ];
  const {
    id,
    img,
    postName,
    typesLocation,
    workLocation,
    salary,
    jobPostTime,
    Contract,
  } = vacancy;
  return (
    <BioContext.Provider
      value={{
        id,
        img,
        postName,
        typesLocation,
        workLocation,
        salary,
        jobPostTime,
        Contract,
      }}
    >
      {children}
    </BioContext.Provider>
  );
};
