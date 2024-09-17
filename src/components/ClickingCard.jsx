import React, { useContext } from "react";
import Cards from "./searchSection/Cards";
import { BioContext, BioProvider } from "./ContextAPI";


function ClickingCard() {
  const vancany = useContext(BioContext);
  const {
    id,
    img,
    postName,
    typesLocation,
    workLocation,
    salary,
    jobPostTime,
    Contract,
  } = vancany;

  const handleCon = ()=>{
    console.log('hey')
  }
  return (
    <BioProvider>
      {
        <Cards
          id={id}
          img={img}
          postName={postName}
          typesLocation={typesLocation}
          workLocation={workLocation}
          salary={salary}
          jobPostTime={jobPostTime}
          Contract={Contract}
          onClick={handleCon}
        />
      }
    </BioProvider>
  );
}

export default ClickingCard;
