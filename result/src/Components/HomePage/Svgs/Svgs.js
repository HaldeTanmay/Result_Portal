import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion'

import {  Graduation, DancingBook} from '../../../assets'
import './Svgs.css'
import Result from '../Result/Result'

const Svgs = () => {
  return (
    <div className='app_svgs'>  
    {/* Dancing Book Svg */}
     <motion.div
          animate={{ x: [200,-20] }}
          transition={{ type: "spring", duration: 4 }}
          drag
          dragTransition={{
            min: 0,
            max: 10,
            bounceStiffness: 100
          }}
     >
        <Player
              autoplay
              loop
              src={DancingBook}
              style={{ height: '500px', width: '600px' }}
            >
            </Player>
      </motion.div>   
      {/* Result section  */}
        <Result/>
      {/* Graduation Svg section */}
       <motion.div
            animate={{ y: [0,20] }}
            transition={{ type: "spring", duration: 4 }}
       >
          <Player
              autoplay
              loop
              src={Graduation}
              style={{ height: '500px', width: '500px' }}
            >
            </Player>
       </motion.div>
      
    </div>
  )
}

export default Svgs