import React from 'react'

const SectionHeader = ({SectionheaderText , SectionheaderStyle}) => {
  return (
    <h1 className={`${SectionheaderStyle} capitalize text-[40px] leading-[48px] text-black text-center`}>
        {SectionheaderText}
    </h1>
  )
}

export default SectionHeader