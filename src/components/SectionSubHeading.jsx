import React from 'react'

const SectionSubHeading = ({SectionSubHeadingText , SectionSubHeadingStyle}) => {
  return (
    <p className={`${SectionSubHeadingStyle} text-bold inline-block capitalize text-base bg-primary-color text-black px-3 leading-[28px]`}>
        {SectionSubHeadingText}
    </p>
  )
}

export default SectionSubHeading