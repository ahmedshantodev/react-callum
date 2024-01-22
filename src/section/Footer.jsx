import React from 'react'

const Footer = () => {
  return (
    <section className='bg-black py-[60px]'>
        <div className="container mx-auto max-w-[1320px] text-white flex justify-between items-center">
            <p>
            Copyright © 2023 <a href='' className=' text-primary-color underline'>Callum</a>. All Rights Reserved.
            </p>
            <p>
            Designed by<a href='https://www.facebook.com/ahmedshantodev' target="_blank" className=' text-primary-color underline'> Monsur Ahmed Shanto</a>
            </p>
        </div>
    </section>
  )
}

export default Footer