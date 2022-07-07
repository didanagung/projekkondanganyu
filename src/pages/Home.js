import React from 'react';
import poto from '../assets/images/logo.svg';


const Home = () => {
  return (
    <>
      <div className='containerds h-screen md:h-auto flex'>
        <div className='m-auto text-center'>
          <h1 className='text-4xl font-bold w-2/3 mx-auto mb-5'>Pembuatan Undangan Digital</h1>
          <p className='text-md w-2/3 mx-auto'>Jasa Pembuatan website digital yang bertujuan untuk memudahkan menyebar luaskan undangan pernikahan, ulang tahun, syukuran.</p>
        </div>
      </div>


      <div className="containerd text-center">
        <h1 className='title mt-10'>Fitur yang disediakan oleh <button className='font-semibold text-indigo-700 hover:text-indigo-900 mb-10'>kondanganyu.online</button></h1>
        <div className="grid sm:grid-cols-2 md:gap-1 xl:grid-cols-3">
          <div className='cardFitur group'>
            <img className='imgFitur' src={poto} alt="dsa" />
            <h3 className='fitur group-hover:text-indigo-800'>Template</h3>
            <p className='pFitur'>Terdapat berbagai macam template yang siap pakai.</p>
          </div>
          <div className='cardFitur group'>
            <img className='imgFitur' src={poto} alt="dsa" />
            <h3 className='fitur group-hover:text-indigo-800'>Ucapan atau Doa</h3>
            <p className='pFitur'>Menu ucapan atau doa yang bisa langsung di ucapkan di undangan anda.</p>
          </div>
          <div className='cardFitur group'>
            <img className='imgFitur' src={poto} alt="dsa" />
            <h3 className='fitur group-hover:text-indigo-800'>Galeri</h3>
            <p className='pFitur'>Menu galeri yang menampilkan foto ataupun video anda dan pasangan anda.</p>
          </div>
          <div className='cardFitur group'>
            <img className='imgFitur' src={poto} alt="dsa" />
            <h3 className='fitur group-hover:text-indigo-800'>Nama Tamu</h3>
            <p className='pFitur'>Sesuaikan nama tamu yang akan anda bagikan sesuka hati.</p>
          </div>
          <div className='cardFitur group'>
            <img className='imgFitur' src={poto} alt="dsa" />
            <h3 className='fitur group-hover:text-indigo-800'>Tampilan</h3>
            <p className='pFitur'>Tampilan yang responsive yang bisa di buka di hp, tab maupun laptop/perangkat komputer.</p>
          </div>
          <div className='cardFitur group'>
            <img className='imgFitur' src={poto} alt="dsa" />
            <h3 className='fitur group-hover:text-indigo-800'>Pembayaran Mudah</h3>
            <p className='pFitur'>Anda bisa bayar kapanpun dan dimanapun dengan transfer online.</p>
          </div>
        </div>
      </div>
      <div className=" containerd h-screen mt-2"></div>
    </>
  )
}

export default Home