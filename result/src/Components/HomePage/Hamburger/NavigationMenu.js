import React ,{useState} from 'react';
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'

import './Navbar.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (

    <nav className='app__navbar'>
       <ul className='app__navbar-links'>
         {['home','about'].map((item)=>(
          <li className='p-text app__flex' key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>

         ))}
       </ul>
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=>setToggle(true)}/>
            {
              toggle &&(
                <motion.div
                  whileInView={{x:[-100,-30]}}
                   transition={{duration: 0.85,ease:'easeOut'}}
                   className='app_cross'
                >
                 <HiX onClick={()=>setToggle(false)}/>
                 <ul>
                 {['home','about'].map((item)=>(
                    <li  key={item}>
                      <a href={`#${item}`} onClick={()=>setToggle(false)}>
                        {item}
                      </a>
                    </li>

                  ))}
                  </ul>
                </motion.div>
              )
            }
        </div>
    </nav>
  );
};

export default Navbar;