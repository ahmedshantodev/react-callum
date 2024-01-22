import React from "react";
import SectionSubHeading from "../components/SectionSubHeading";
import SectionHeader from "../components/SectionHeader";
import ImageItem from "../components/ImageItem";
import lightImage from "../assets/images/faq.png";
// react icons
import { IoChevronDown } from "react-icons/io5";

const Faq = () => {
  return (
    <section id="faq" className="py-[85px]">
      <div className="container flex justify-between items-center max-w-[1320px] mx-auto">
        <div className="left-side w-2/4">
          <SectionSubHeading SectionSubHeadingText={`Faq`} />
          <SectionHeader
            SectionheaderStyle={`mt-[8px] mb-[60px] font-bold text-start`}
            SectionheaderText={`Have any questions?`}
          />
          <ul className=" text-[18px] text-[#959596] capitalize">
            <li className="flex items-center border-b-2 border-[#dfe0e1] py-[18px]">
              <IoChevronDown className="mr-[10px]" /> What is Callum?
            </li>
            <li className="flex items-center border-b-2 border-[#dfe0e1] py-[18px]">
              <IoChevronDown className="mr-[10px]" /> How Can I help you?
            </li>
            <li className="flex items-center border-b-2 border-[#dfe0e1] py-[18px]">
              <IoChevronDown className="mr-[10px]" /> simple process for workflow?
            </li>
            <li className="flex items-center border-b-2 border-[#dfe0e1] py-[18px]">
              <IoChevronDown className="mr-[10px]" /> iscallum a multi-purspose templete?
            </li>
            <li className="flex items-center py-[18px]">
              <IoChevronDown className="mr-[10px]" /> why responsive one page template?
            </li>
          </ul>
        </div>
        <div className="right-side w-2/4 flex justify-center items-center">
          <ImageItem imgStyle={`w-[467px]`} imagesrc={lightImage} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
