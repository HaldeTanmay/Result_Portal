import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion'
import { useNavigate} from 'react-router-dom'

import { Security} from '../../assets'


import './Home.css';

function Home() {
  const Navigate = useNavigate();
  // const [pass, setPass] = useState(false)

  var inputPassword = '' ;
  const password = '12345';
  const handleChange = (e) => {
      inputPassword =[ e.target.value]
      console.log(e.target.value)
      console.log(inputPassword)
   }

   const handleSubmit = (e) => {
    if(inputPassword[0] === password){
      console.log('seccessful')
      // setPass(true);
      Navigate("/Home")
     }else{
      window.alert("Enter Password is wrong please try again")
     }
 
     console.log(inputPassword)
   }

  return (
    <div >

      <div className='app_auth'>
      <Player
           autoplay
           loop
           src={Security}
           className="app_security"
           >
      </Player>
     </div>
     <motion.div 
        animate={{ y: [100, 0] }}
        transition={{ type: "spring", duration: 4 }}
        whileInView={{
          opacity: [0, 1],
          transition: { duration: 2 },
        }}
       className='app_inputs'
     >   
        <input type='password' placeholder='********' onChange={(e) =>handleChange(e)}/>
        <button className='app_securitybtn' onClick={handleSubmit}>Login</button>
        {/* <p id="wrong"></p> */}
     </motion.div>
    </div>
  );
}

export default Home;
