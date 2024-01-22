import React from "react";
import SectionSubHeading from "../components/SectionSubHeading";
import SectionHeader from "../components/SectionHeader";
import SubTitle from "../components/SubTitle";
import Description from "../components/Description";
import ListItem from "../components/ListItem";
// react icons
import { IoMdPaper , IoIosVideocam  } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#f8f9fa] py-[80px]">
      <div className="container max-w-[1320px] mx-auto">
        <div className="heading-part text-center">
          <SectionSubHeading SectionSubHeadingText={`portfolio`} />
          <SectionHeader
            SectionheaderStyle={`mt-[15px] mb-[30px]`}
            SectionheaderText={`Some of my most recent projects`}
          />
          <div className="menu mb-[50px]">
            <ul className="flex justify-center gap-10 capitalize">
              <ListItem ListItemStyle={`text-black`} listItemText={`all`} />
              <ListItem listItemText={`details`} />
              <ListItem listItemText={`mockups`} />
              <ListItem listItemText={`youtube videos`} />
              <ListItem listItemText={`vimeo videos`} />
            </ul>
          </div>
        </div>
        <div className="card-items flex justify-between items-center flex-wrap">
          <div className="card group w-[32%] bg-card-one bg-no-repeat bg-cover bg-center h-[450px] cursor-pointer mb-[24px]">
            <div className=" bg-black-overlay pt-[160px] text-center h-full hidden group-hover:block transition-all duration-300 ease-in-out">
              <IoMdPaper className=" text-primary-color mx-auto text-[50px] mb-[15px]" />
              <SubTitle
                SubTitleStyle={`text-white mb-[5px]`}
                SubTitleText={`Details project 1`}
              />
              <Description
                DescriptionStyle={`text-white`}
                DescriptionText={`Category`}
              />
            </div>
          </div>
          <div className="card group w-[32%] bg-card-two bg-no-repeat bg-cover bg-center h-[450px] cursor-pointer  mb-[24px]">
            <div className=" bg-black-overlay pt-[160px] text-center h-full hidden group-hover:block transition-all duration-300 ease-in-out">
              <CiImageOn className=" text-primary-color mx-auto text-[50px] mb-[15px]" />
              <SubTitle
                SubTitleStyle={`text-white mb-[5px]`}
                SubTitleText={`Mockups project 1`}
              />
              <Description
                DescriptionStyle={`text-white`}
                DescriptionText={`Category`}
              />
            </div>
          </div>
          <div className="card group w-[32%] bg-card-three bg-no-repeat bg-cover bg-center h-[450px] cursor-pointer  mb-[24px]">
            <div className=" bg-black-overlay pt-[160px] text-center h-full hidden group-hover:block transition-all duration-300 ease-in-out">
              <IoIosVideocam className=" text-primary-color mx-auto text-[50px] mb-[15px]" />
              <SubTitle
                SubTitleStyle={`text-white mb-[5px]`}
                SubTitleText={`Youtube Video`}
              />
              <Description
                DescriptionStyle={`text-white`}
                DescriptionText={`Category`}
              />
            </div>
          </div>
          <div className="card group w-[32%] bg-card-four bg-no-repeat bg-cover bg-center h-[450px] cursor-pointer  mb-[24px]">
            <div className=" bg-black-overlay pt-[160px] text-center h-full hidden group-hover:block transition-all duration-300 ease-in-out">
              <IoIosVideocam className=" text-primary-color mx-auto text-[50px] mb-[15px]" />
              <SubTitle
                SubTitleStyle={`text-white mb-[5px]`}
                SubTitleText={`vimeo Video`}
              />
              <Description
                DescriptionStyle={`text-white`}
                DescriptionText={`Category`}
              />
            </div>
          </div>
          <div className="card group w-[32%] bg-card-five bg-no-repeat bg-cover bg-center h-[450px] cursor-pointer  mb-[24px]">
            <div className=" bg-black-overlay pt-[160px] text-center h-full hidden group-hover:block transition-all duration-300 ease-in-out">
              <IoMdPaper className=" text-primary-color mx-auto text-[50px] mb-[15px]" />
              <SubTitle
                SubTitleStyle={`text-white mb-[5px]`}
                SubTitleText={`details project 2`}
              />
              <Description
                DescriptionStyle={`text-white`}
                DescriptionText={`Category`}
              />
            </div>
          </div>
          <div className="card group w-[32%] bg-card-six bg-no-repeat bg-cover bg-center h-[450px] cursor-pointer  mb-[24px]">
            <div className=" bg-black-overlay pt-[160px] text-center h-full hidden group-hover:block transition-all duration-300 ease-in-out">
              <CiImageOn className=" text-primary-color mx-auto text-[50px] mb-[15px]" />
              <SubTitle
                SubTitleStyle={`text-white mb-[5px]`}
                SubTitleText={`mockups design 2`}
              />
              <Description
                DescriptionStyle={`text-white`}
                DescriptionText={`Category`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
