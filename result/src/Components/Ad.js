import React from "react";
import "../Comp_css/Ad.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Ad(props) {
  const location = useLocation();
  var title = location.state.title;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/label", { state: { title: title } });
    // console.log(event.currentTarget.id);
  };
  const [counter, setCounter] = React.useState(5);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div className="background2">
      <div className=" ad_main">
        <motion.div
          animate={{ y: [-30, 0], opacity: [0.6, 1] }}
          transition={{ type: "spring", duration: 3 }}
          className="ad_label"
        >
          Advertisement
        </motion.div>

        <div className="ad_high1">
          <div className="ad_container2">
            <img
              id="ad"
              src="https://source.unsplash.com/600x600/?advertisements,product"
              alt="Advertisement"
            />
          </div>
          <div className="ad_container3">
            <div className="timer">
              <div className="mid">
                <b>{counter}</b>
              </div>
            </div>
            <div className="ad_skip">
              {/* <Link to="/un"><button className='btn2' > Skip </button></Link> */}
              <button className="ad_btn2" onClick={handleClick}>
                {" "}
                Skip{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ad;
