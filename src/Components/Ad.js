import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'

import '../Comp_css/Ad.css'

function Ad(props) {
    const location = useLocation();
    var title = location.state.title;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/label", { state: { title: title } })
        // console.log(event.currentTarget.id);
    };
    const [counter, setCounter] = React.useState(5);
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    return (
        <div className="Ad_conatiner">
            <motion.div 
              animate={{ y: [-30,0],opacity:[0.6,1] }}
              transition={{ type: "spring", duration: 3 }}
              className='Ad_label'
            
            >
                Advertisment
            </motion.div>
            <motion.div 
             animate={{ y: [30,0],opacity:[0.6,1] }}
             transition={{ type: "spring", duration: 3 }}
              className="Ad_card"

            >
                <div className="img_container">
                    <img src="https://source.unsplash.com/600x600/?advertisements,product" alt="Advertisement" />
                </div>
                <div className="Ad_button_container3">
                    <div className="Ad_timer">
                        <div><b>{counter}</b></div>
                    </div>
                    <div className='button_container'>
                        {/* <Link to="/un"><button className='btn2' > Skip </button></Link> */}
                        <button className='skip_button' onClick={handleClick}> Skip </button>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default Ad
