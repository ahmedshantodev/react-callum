import React from "react";
import Text from "../components/Text";
import SubTitle from "../components/SubTitle";
import Button from "../components/Button";

const Banner = () => {
  return (
    <section id="home" className="bg-banner-bg-image h-lvh bg-no-repeat bg-center bg-cover">
      <div className="overlay absolute top-0 left-0 bg-black-overlay w-full h-full">
        <div className="container max-w-[1320px] mx-auto text-center">
          <Text
            textStyle={`text-white mt-[300px]`}
            textData={`HI, I'M A FREELANCER`}
          />
          <h1 className=" text-[124px] font-semibold text-white leading-[161px]">
            React Developer
          </h1>
          <SubTitle
            SubTitleStyle={`mb-[30px] text-white`}
            SubTitleText={`based in Los Angeles, USA.`}
          />
          <Button buttonText={`View My Project`} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
