import React from "react";
import LaptopImg from "../../assets/laptop-computer-icon.png";

import Cards from "./Cards";

function Post() {
  return (
    <section className=" w-[75%] xs:w-full xs:mt-5 md:mt-0 md:w-[65%] lg:w-[75%]">
      <div className="cards flex flex-col gap-3">
        <Cards img={LaptopImg} postName="Senior Rust developer" typesLocation="Hybrid" workLocation="Remote" salary="Not mentioned" jobPostTime="8 months ago" Contract="Full-time"/>

        <Cards img={LaptopImg} postName="Senior Rust developer" typesLocation="Hybrid" workLocation="Remote" salary="Not mentioned" jobPostTime="8 months ago" Contract="Contract"/>

        <Cards img={LaptopImg} postName="Senior Rust developer" typesLocation="Hybrid" workLocation="Remote" salary="Not mentioned" jobPostTime="8 months ago" Contract="Temporary"/>

        <Cards img={LaptopImg} postName="Senior Rust developer" typesLocation="Hybrid" workLocation="Remote" salary="Not mentioned" jobPostTime="8 months ago" Contract="Intership"/>
      </div>
    </section>
  );
}

export default Post;
