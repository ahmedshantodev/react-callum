import React from 'react'

const SubTitle = ({SubTitleText , SubTitleStyle}) => {
  return (
    <h4 className={`${SubTitleStyle} capitalize text-[21px]`}>
      {SubTitleText}
    </h4>
  )
}

export default SubTitle