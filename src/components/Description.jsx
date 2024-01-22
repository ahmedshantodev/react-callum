import React from 'react'

const Description = ({DescriptionText , DescriptionStyle}) => {
  return (
    <div className={`${DescriptionStyle} text-base leading-7 text-[#8E9A9D]`}>
        {DescriptionText}
    </div>
  )
}

export default Description