import React from 'react';
import igFoto from '../assets/images/donglod.jpg';
import { RiInstagramFill, RiWhatsappFill, RiFacebookCircleFill, RiMailSendFill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <div className="containerds">
        <h1 className='text-4xl text-center font-bold text-green-600 mb-6 '>Kontak Kami</h1>
        <img src={igFoto} alt="" className='mx-auto'/>
      </div>
      <div className="containerds mb-16 md:mb-0">
        <a href="https://www.instagram.com/sergia_dbako" target="_blank" rel="noopener noreferrer" className='group' >
          <div className='containerds shadow-lg bg-white text-center group-hover:text-green-600 group-hover:shadow-2xl my-5'>
            <RiWhatsappFill className='w-12 h-12 mx-auto' />
            <p className='text-xl font-semibold'>Kondangan Yu</p>
          </div>
        </a>
        <a href="https://www.instagram.com/sergia_dbako" target="_blank" rel="noopener noreferrer" className='group' >
          <div className='containerds shadow-lg bg-white text-center group-hover:text-green-600 group-hover:shadow-2xl my-5'>
            <RiInstagramFill className='w-12 h-12 mx-auto' />
            <p className='text-xl font-semibold'>kondanganyu</p>
          </div>
        </a>
        <a href="https://www.instagram.com/sergia_dbako" target="_blank" rel="noopener noreferrer" className='group' >
          <div className='containerds shadow-lg bg-white text-center group-hover:text-green-600 group-hover:shadow-2xl my-5'>
            <RiFacebookCircleFill className='w-12 h-12 mx-auto' />
            <p className='text-xl font-semibold'>Kondangan Yu</p>
          </div>
        </a>
        <a href="https://www.instagram.com/sergia_dbako" target="_blank" rel="noopener noreferrer" className='group' >
          <div className='containerds shadow-lg bg-white text-center group-hover:text-green-600 group-hover:shadow-2xl my-5'>
            <RiMailSendFill className='w-12 h-12 mx-auto' />
            <p className='text-xl font-semibold'>admin@kondanganyu.com</p>
          </div>
        </a>

      </div>
    </>
  )
}

export default Contact;