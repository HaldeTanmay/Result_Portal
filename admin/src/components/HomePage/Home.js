import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion'

import { admin, admin1 , book} from '../../assets'
import Navbar  from './Hamburger/NavigationMenu'
import DashBoard from './DashBoard/Result'
import './Home.css';

function Home() {


  return (
    <div className="app_Home">
      <Navbar/>
    <div className='app_svgs' >
    <motion.div
          animate={{ x: [200,0] }}
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
              src={book}
              className="dancing_book"
            >
            </Player>
      </motion.div>   

        <DashBoard/>
    </div>

  
    </div>
  );
}

export default Home;
