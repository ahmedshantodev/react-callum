import React from 'react'

const Text = ({textData , textStyle}) => {
  return (
    <p className={`${textStyle} text-[32px] leading-[38px]`}>
        {textData}
    </p>
  )
}

export default Text