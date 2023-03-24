import React from 'react'
import { motion } from 'framer-motion'
import { ThreeCircles} from 'react-loader-spinner'

// import '../Comp_css/Univer.css'
// import Accordian from './Accordian';
import ChoiceSem from './ChoiceSem';
import './semester.css';

class Semester extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        // var un_name = props.un_name;
        // var s_name = props.s_name;
        this.state = {
            items: [],
            DataisLoaded: false,
            s_name: props.s_name,
            un_name: props.un_name,
            dp_name: props.dp_name
        };
    }

    componentDidMount() {
        const { s_name, un_name, dp_name } = this.state;
        // var s_name = { props.title };
        // fetch("https://jsonplaceholder.typicode.com/users")
        fetch(`http://localhost:4000/un/${s_name}/${un_name}/${dp_name}`, { params: { s_name, un_name, dp_name } })
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render(props) {

        const { DataisLoaded, items, s_name, un_name, dp_name } = this.state;
        console.log(items.length)
        if (!DataisLoaded) return (<div className='spinner'>
        <ThreeCircles
            height="100"
            width="100"
            radius={1}
            color="#0066ff"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
      /> </div>)

        return (
            <div className='main'>
                {/* <div id='s_label'>{title}</div> */}
                <motion.div
                    animate={{ y: [30,0],opacity:[0.6,1] }}
                    transition={{ type: "spring", duration: 3 }}
                    className="semester_container"
                >
                    <div className="semester_card">
                        
                            {
                                items.map((item) => (
                                    < ChoiceSem
                                        title={item}
                                        s_name={s_name}
                                        un_name={un_name}
                                        dp_name={dp_name}
                                    />
                                ))
                            }
                    </div>

                </motion.div>

            </div>

        );
    }
}

export default Semester;

