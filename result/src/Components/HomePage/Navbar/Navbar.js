import React from 'react'
import { motion } from 'framer-motion'

import './Style.css';

const Navbar = () => {
  return (

    <motion.div
       animate={{ y: [-20,10] }}
       transition={{ type: "spring", duration: 4 }}
    >
     <div className='app_nav'>
        <p>Parinaam</p>
        <div className='app_detail'>
          <button>About us</button>
          <button>Contect</button>
          <button>Enquire</button>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar