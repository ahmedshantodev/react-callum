import React from 'react'

const Title = ({TitleText , TitleStyle}) => {
  return (
    <h4 className={`${TitleStyle} text-2xl capitalize leading-7 text-black`}>
        {TitleText}
    </h4>
  )
}

export default Title