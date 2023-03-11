import React from 'react'
import { motion } from 'framer-motion'
import { ThreeCircles} from 'react-loader-spinner'

// import '../Comp_css/Univer.css'
// import Accordian from './Accordian';
import ChoiceDept from './ChoiceDept';
import './Department.css'
// import Card from './Card';
// import { useCallback } from "react";
// const axios = require('axios');

class Department extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        // var un_name = props.un_name;
        // var s_name = props.s_name;
        this.state = {
            items: [],
            DataisLoaded: false,
            s_name: props.s_name,
            un_name: props.un_name
        };
    }

    componentDidMount() {
        const { s_name, un_name } = this.state;
        // var s_name = { props.title };
        // fetch("https://jsonplaceholder.typicode.com/users")
        fetch(`http://localhost:4000/un/${s_name}/${un_name}`, { params: { s_name, un_name } })
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render(props) {

        const { DataisLoaded, items, s_name, un_name } = this.state;
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
            <div >
                {/* <div id='s_label'>{title}</div> */}
                <motion.div 
                    animate={{ y: [30,0],opacity:[0.6,1] }}
                    transition={{ type: "spring", duration: 3 }}
                    className="department_container"
                >
                    <div className="department_card">
                            {
                                items.map((item) => (
                                    < ChoiceDept
                                        title={item}
                                        s_name={s_name}
                                        un_name={un_name}
                                    />
                                ))
                            }
                    </div>

                </motion.div>

            </div>

        );
    }
}

export default Department;

