import React, {useState} from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Home, Templates, Contact } from '../pages/ImportPages';
import { RiHome3Fill, RiFolderOpenFill, RiSpyFill, RiMenu2Fill, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const activeClassName = 'navlink aktif flex';
    const activeMdClassName = 'navlink aktifMd flex';
    const nameClass = 'navlink flex';
    const [open, setOpen] = useState(false);
  return (
    <>
        <div>
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/templates' element={ <Templates /> }/>
                <Route path='/kontak' element={ <Contact /> } />
            </Routes>
        </div>
        <div className='fixed bottom-0 bg-[#f6f6f6] border-t-2 w-full rounded-t-xl md:invisible'>
            <nav className='flex justify-evenly'>
                <NavLink className={({ isActive }) =>
              isActive ? activeClassName : nameClass
            } to='/'><span className='text-center m-auto'><RiHome3Fill className='mx-auto text-2xl'/><strong>Utama</strong></span></NavLink>
                <NavLink className={({ isActive }) =>
              isActive ? activeClassName : nameClass
            } to='/templates'><span className='text-center m-auto'><RiFolderOpenFill className='mx-auto text-2xl'/><strong>Template</strong></span></NavLink>
                <NavLink className={({ isActive }) =>
              isActive ? activeClassName : nameClass
            } to='/kontak'><span className='text-center m-auto'><RiSpyFill className='mx-auto text-2xl'/><strong>Kontak</strong></span></NavLink>
            </nav>
        </div>
        <div className='invisible fixed left-5 bottom-5 md:visible'>
            <nav className={`transition-all ${(!open) ? "invisible" : "visible"}`}>
              <NavLink className={({ isActive }) =>
            isActive ? activeMdClassName : nameClass} to='/kontak'><span className='text-center m-auto'><RiSpyFill className='mx-auto text-2xl'/><strong>Kontak</strong></span></NavLink>
              <NavLink className={({ isActive }) =>
            isActive ? activeMdClassName : nameClass} to='/templates'><span className='text-center m-auto'><RiFolderOpenFill className='mx-auto text-2xl'/><strong>Template</strong></span></NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? activeMdClassName : nameClass} to='/'><span className='text-center m-auto'><RiHome3Fill className='mx-auto text-2xl'/><strong>Utama</strong></span></NavLink>
            </nav>
          <button onClick={() => setOpen(!open)} className='hover:bg-slate-300 text-4xl hover:rounded-full hover:shadow-xl p-4 active:rotate-180 duration-300 transition-all'>{(!open) ? <RiMenu2Fill/> : <RiCloseLine className='rotate-180 duration-300 transition-all'/>}</button>
        </div>
    </>
  )
}

export default Navbar