import React from "react";
import SectionSubHeading from "../components/SectionSubHeading";
import SectionHeader from "../components/SectionHeader";
import SubTitle from "../components/SubTitle";
import ImageItem from "../components/ImageItem";
import clientImage from "../assets/images/client-sm-1.jpg";
import Description from '../components/Description'

const Client = () => {
  return (
    <section id="client-speak" className="bg-[#939597] py-[85px]">
      <div className="container max-w-[1320px] mx-auto">
        <div className="header-part text-center">
          <SectionSubHeading SectionSubHeadingText={`client speak`} />
          <SectionHeader
            SectionheaderStyle={`mt-[8px] mb-[60px] font-bold text-white`}
            SectionheaderText={`What Some of my Clients Say`}
          />
        </div>
        <div className="client-comment w-3/4 mx-auto text-center">
          <SubTitle
            SubTitleStyle={`text-[#f4f4f4] px-[20px]`}
            SubTitleText={`“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure. simply dummy text of the printing and typesetting industry.”`}
          />
          <ImageItem
            imgStyle={`rounded-full mx-auto mt-[25px]`}
            imagesrc={clientImage}
          />
          <SubTitle SubTitleStyle={`text-white mt-[5px]`} SubTitleText={`Jay Shah`} />
          <Description DescriptionStyle={`text-white`} DescriptionText={`founder at icomatic pvt. ltd`}/>
        </div>
      </div>
    </section>
  );
};

export default Client;
