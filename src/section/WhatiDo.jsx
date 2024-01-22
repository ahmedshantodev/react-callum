import React from 'react'
import SectionHeader from '../components/SectionHeader'
import SectionSubHeading from '../components/SectionSubHeading'
import Title from '../components/Title'
import Description from '../components/Description'
// react icons
import { IoIosColorPalette } from "react-icons/io";
import { MdOutlineMonitor } from "react-icons/md";
import { FaPencilRuler , FaPaintBrush  } from "react-icons/fa";
import { SlPicture } from "react-icons/sl";
import { AiOutlineSound } from "react-icons/ai";

const WhatiDo = () => {
  return (
    <section id='whta-i-do' className='py-[90px] bg-[#f8f9fa]'>
        <div className="container max-w-[1320px] mx-auto text-center">
            <SectionSubHeading SectionSubHeadingText={`What i do`}/>
            <SectionHeader SectionheaderStyle={`mt-[15px] mb-[35px]`} SectionheaderText={`How I can help your next project`}/>
            <div className="cards flex justify-center items-center flex-wrap">
                <div className="card-item w-1/3 py-[40px]">
                    <IoIosColorPalette className=' text-primary-color text-[90px] mx-auto'/>
                    <Title TitleStyle={`mt-[10px] mb-[15px]`} TitleText={`Graphic Design`}/>
                    <Description DescriptionStyle={`px-[70px]`} DescriptionText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.`}/>
                </div>
                <div className="card-item w-1/3 py-[40px]">
                    <MdOutlineMonitor  className=' text-primary-color text-[90px] mx-auto'/>
                    <Title TitleStyle={`mt-[10px] mb-[15px]`} TitleText={`Web Design`}/>
                    <Description DescriptionStyle={`px-[70px]`} DescriptionText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.`}/>
                </div>
                <div className="card-item w-1/3 py-[40px]">
                    <FaPencilRuler  className=' text-primary-color text-[70px] mx-auto'/>
                    <Title TitleStyle={`mt-[15px] mb-[15px]`} TitleText={`UI/UX Design`}/>
                    <Description DescriptionStyle={`px-[70px]`} DescriptionText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.`}/>
                </div>
                <div className="card-item w-1/3 py-[40px]">
                    <FaPaintBrush  className=' text-primary-color text-[90px] mx-auto'/>
                    <Title TitleStyle={`mt-[10px] mb-[15px]`} TitleText={`App Design & Develop`}/>
                    <Description DescriptionStyle={`px-[70px]`} DescriptionText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.`}/>
                </div>
                <div className="card-item w-1/3 py-[40px]">
                    <SlPicture   className=' text-primary-color text-[90px] mx-auto'/>
                    <Title TitleStyle={`mt-[10px] mb-[15px]`} TitleText={`Business Analysis`}/>
                    <Description DescriptionStyle={`px-[70px]`} DescriptionText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.`}/>
                </div>
                <div className="card-item w-1/3 py-[40px]">
                    <AiOutlineSound   className=' text-primary-color text-[70px] mx-auto'/>
                    <Title TitleStyle={`mt-[15px] mb-[15px]`} TitleText={`SEO Marketing`}/>
                    <Description DescriptionStyle={`px-[70px]`} DescriptionText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.`}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhatiDo