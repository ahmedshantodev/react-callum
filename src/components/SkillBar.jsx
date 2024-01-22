import React from 'react'

const SkillBar = ({parcent}) => {
  return (
    <div className='w-full bg-[#e9ecef] h-[6px] rounded-3xl relative'>
        <div className={`w-[${parcent}] h-full rounded-3xl bg-primary-color`}>
            <div className="span absolute bottom-[5px] right-0">{parcent}</div>
        </div>
    </div>
  )
}

export default SkillBar