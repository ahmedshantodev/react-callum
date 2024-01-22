import React from "react";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

const Interested = () => {
  return (
    <section className="bg-interested-bg-image relative bg-center bg-no-repeat bg-cover">
      <div className="overlay bg-black-overlay w-full h-full">
        <div className="container mx-auto max-w-[1320px] text-center">
          <SectionHeader
            SectionheaderStyle={`pt-[150px] mb-[20px] text-white`}
            SectionheaderText={`interested in work with me?`}
          />
          <Button buttonStyle={`mb-[150px]`} buttonText={`hire me!`} />
        </div>
      </div>
    </section>
  );
};

export default Interested;
