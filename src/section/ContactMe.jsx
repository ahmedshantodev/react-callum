import React from "react";
import SectionHeader from "../components/SectionHeader";
import SubTitle from "../components/SubTitle";
import Description from "../components/Description";
import Button from "../components/Button";
// react icons
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaDribbble,
  FaLongArrowAltRight,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <section id="contact-me" className="bg-primary-color py-[85px]">
      <div className="container max-w-[1320px] mx-auto flex justify-between">
        <div className="left-side w-[50%]">
          <SectionHeader
            SectionheaderStyle={`font-medium text-start`}
            SectionheaderText={`let's get in touch`}
          />
          <SubTitle
            SubTitleStyle={`my-[35px] pr-[140px]`}
            SubTitleText={`I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.`}
          />
          <SubTitle SubTitleText={`living in:`} />
          <Description
            DescriptionStyle={`text-black text-[18px] mb-[20px]`}
            DescriptionText={`30 Shacham street, Los Angeles, USA.`}
          />
          <SubTitle SubTitleText={`call:`} />
          <Description
            DescriptionStyle={`text-black text-[18px] mb-[50px]`}
            DescriptionText={`(+060) 444 434 444`}
          />
          <div className="social-media flex gap-[15px]">
            <FaTwitter className=" text-[24px] text-[#4d555a] hover:text-[#00acee] hover:scale-[1.2] transition-all duration-300 ease-in-out" />
            <FaFacebook className=" text-[24px] text-[#4d555a] hover:text-[#00acee] hover:scale-[1.2] transition-all duration-300 ease-in-out" />
            <FaInstagram className=" text-[24px] text-[#4d555a] hover:text-[#00acee] hover:scale-[1.2] transition-all duration-300 ease-in-out" />
            <FaGithub className=" text-[24px] text-[#4d555a] hover:text-[#00acee] hover:scale-[1.2] transition-all duration-300 ease-in-out" />
            <FaDribbble className=" text-[24px] text-[#4d555a] hover:text-[#00acee] hover:scale-[1.2] transition-all duration-300 ease-in-out" />
          </div>
        </div>
        <div className="right-side w-[50%]">
          <SectionHeader SectionheaderText={`Estimate your Project?`} />
          <div className="input-area mt-[35px]">
            <div className="name flex flex-col border-b-2 border-[#98e029]">
              <label htmlFor="name">What is Your Name:</label>
              <input
                className=" bg-transparent focus:outline-none active:bg-transparent mt-[10px] pb-[5px]"
                type="text"
                id="name"
              />
            </div>
            <div className="email flex flex-col border-b-2 border-[#98e029]">
              <label className="mt-[25px]" htmlFor="email">
                What is Your Name:
              </label>
              <input
                className=" bg-transparent focus:outline-none active:bg-transparent mt-[10px] pb-[5px]"
                type="text"
                id="email"
              />
            </div>
            <div className="comment flex flex-col border-b-2 border-[#98e029]">
              <label className="mt-[25px]" htmlFor="comment">
                What is Your Name:
              </label>
              <textarea
                className=" bg-transparent focus:outline-none active:bg-transparent mt-[10px] pb-[5px] min-h-[50px] h-[100px]"
                id="comment"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <Button
              buttonStyle={`mt-[20px] !bg-black text-white hover:opacity-[0.7] flex items-center`}
              buttonText={`send`}
              icon={<FaLongArrowAltRight className="ml-[10px]" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
