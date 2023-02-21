import React from 'react'
import '../Comp_css/Ad.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

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
        <div className="main">
            <b id='label'>#Ad</b>
            <div className="high1">
                <div className="container2">
                    <img id='ad' src="https://source.unsplash.com/600x600/?advertisements,product" alt="Advertisement" />
                </div>
                <div className="container3">
                    <div className="timer">
                        <div className="mid"><b>{counter}</b></div>
                    </div>
                    <div className="skip">
                        {/* <Link to="/un"><button className='btn2' > Skip </button></Link> */}
                        <button className='btn2' onClick={handleClick}> Skip </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ad
