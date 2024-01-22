import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Description from "./Description";

const EducationItem = ({ degreeName, institute, details }) => {
  return (
    <li className=" text-start border-b-2 border-gray-300 mb-[20px]">
      <Title TitleStyle={`font-light`} TitleText={degreeName} />
      <SubTitle
        SubTitleStyle={`my-[5px] font-normal`}
        SubTitleText={institute}
      />
      <Description DescriptionStyle={`mb-[25px]`} DescriptionText={details} />
    </li>
  );
};

export default EducationItem;
