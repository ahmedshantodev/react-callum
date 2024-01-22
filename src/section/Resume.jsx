import React from "react";
import SectionSubHeading from "../components/SectionSubHeading";
import SectionHeader from "../components/SectionHeader";
import EducationItem from "../components/EducationItem";
import SubTitle from "../components/SubTitle";
import SkillBar from "../components/SkillBar";
import Button from "../components/Button";

const Resume = () => {
  return (
    <section id="resume" className="py-[90px]">
      <div className="container max-w-[1320px] mx-auto">
        <div className="header-part text-center">
          <div className="heading-part mx-auto text-center">
            <SectionSubHeading SectionSubHeadingText={`Resume`} />
            <SectionHeader
              SectionheaderStyle={`mt-[15px] mb-[30px] font-bold`}
              SectionheaderText={`A summary of My Resume`}
            />
          </div>
          <div className="details-part mb-[80px] flex justify-between items-center">
            <div className="education w-[48%]">
              <h3 className=" mb-[20px] text-[28px] text-start">
                My Education
              </h3>
              <ul className=" border-l-2 border-primary-color pl-[15px]">
                <EducationItem
                  degreeName="Master in Computer Engineering"
                  institute="Harvard University / 2015 - 2017"
                  details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text"
                />
                <EducationItem
                  degreeName="Bachelor in Computer Engineering"
                  institute="Harvard University / 2015 - 2017"
                  details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text"
                />
                <EducationItem
                  degreeName="International Science"
                  institute="Harvard University / 2015 - 2017"
                  details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text"
                />
              </ul>
            </div>
            <div className="experience w-[48%]">
              <h3 className=" mb-[20px] text-[28px] text-start">
                My Experience
              </h3>
              <ul className=" border-l-2 border-primary-color pl-[15px]">
                <EducationItem
                  degreeName="Sr. Font End Developer"
                  institute="Apple Inc / 2020 - current"
                  details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text"
                />
                <EducationItem
                  degreeName="Jr. Font End Developer"
                  institute="Dribbble Inc / 2018 - 2020"
                  details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text"
                />
                <EducationItem
                  degreeName="HTML Developer"
                  institute="Adobe Inc / 2017 - 2018"
                  details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text"
                />
              </ul>
            </div>
          </div>
          <div className="skills-part">
            <h3 className=" mb-[25px] text-[28px] text-start">My Skills</h3>
            <div className="skills flex justify-between items-center flex-wrap w-full">
              <div className="skill-bar  w-[48%] text-start mb-[17px]">
                <SubTitle
                  SubTitleStyle={`mb-[5px] !text-[16px]`}
                  SubTitleText={`Web design`}
                />
                <SkillBar parcent="65%" />
              </div>
              <div className="skill-bar w-[48%] text-start mb-[17px]">
                <SubTitle
                  SubTitleStyle={`mb-[5px] !text-[16px]`}
                  SubTitleText={`HTML`}
                />
                <SkillBar parcent="45%" />
              </div>
              <div className="skill-bar w-[48%] text-start mb-[17px]">
                <SubTitle
                  SubTitleStyle={`mb-[5px] !text-[16px]`}
                  SubTitleText={`JavaScript`}
                />
                <SkillBar parcent="60%" />
              </div>
              <div className="skill-bar w-[48%] text-start mb-[17px]">
                <SubTitle
                  SubTitleStyle={`mb-[5px] !text-[16px]`}
                  SubTitleText={`React js`}
                />
                <SkillBar parcent="65%" />
              </div>
              <div className="skill-bar w-[48%] text-start mb-[17px]">
                <SubTitle
                  SubTitleStyle={`mb-[5px] !text-[16px]`}
                  SubTitleText={`Angular js`}
                />
                <SkillBar parcent="45%" />
              </div>
              <div className="skill-bar w-[48%] text-start mb-[17px]">
                <SubTitle
                  SubTitleStyle={`mb-[5px] !text-[16px]`}
                  SubTitleText={`Bootstrap`}
                />
                <SkillBar parcent="90%" />
              </div>
            </div>
          </div>
          <Button buttonStyle={`mt-[80px] border-2 border-black bg-transparent hover:bg-black hover:text-white`} buttonText={`Download cv`} />
        </div>
      </div>
    </section>
  );
};

export default Resume;
