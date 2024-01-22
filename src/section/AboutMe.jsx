import React from 'react'
import SectionSubHeading from '../components/SectionSubHeading'
import SectionHeader from '../components/SectionHeader'
import Text from "../components/Text"
import SubTitle from "../components/SubTitle"
import Description from "../components/Description"
const AboutMe = () => {
  return (
    <section id='about-me' className='py-[90px]'>
        <div className="container max-w-[1320px] mx-auto">
            <div className="heading-part mx-auto text-center">
              <SectionSubHeading SectionSubHeadingText={`About Me`}/>
              <SectionHeader SectionheaderStyle={`mt-[15px] mb-[30px]`} SectionheaderText={`know me more`}/>
            </div>
            <div className="details-part mb-[50px] w-full flex justify-between items-center">
                <div className="left-side w-[65%]">
                    <Text textStyle={`mb-[10px]`} textData={`Hi I'm Callum Smith`}/>
                    <SubTitle SubTitleStyle={`leading-[40px]`} SubTitleText={`I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.`}/>
                </div>
                <div className="right-side w-[35%] text-center">
                  <h3 className=' inline-block text-[144px] leading-[187px] relative after:content-["] after:absolute after:top-[50%] after:left-[50%] after:-translate-x-[50%] after:-translate-y-[50%]  after:bg-primary-color after:w-[130px] after:h-[130px] after:rounded-full after:-z-10 '>
                    22
                  </h3>
                  <p className='text-[28px]'>
                    Years of <span className='font-bold'>Experiance</span>
                  </p>
                </div>
            </div>
            <div className="information w-full flex justify-between items-center">
              <div className="info-details">
                <Description DescriptionText={`Name:`}/>
                <SubTitle SubTitleText={`Callum Smith`}/>
              </div>
              <div className="info-details">
                <Description DescriptionText={`Email::`}/>
                <SubTitle SubTitleText={`chat@callum.com`}/>
              </div>
              <div className="info-details">
                <Description DescriptionText={`Date of birth:`}/>
                <SubTitle SubTitleText={`11 November, 1987`}/>
              </div>
              <div className="info-details">
                <Description DescriptionText={`From:`}/>
                <SubTitle SubTitleText={`Los Angeles, USA.`}/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe