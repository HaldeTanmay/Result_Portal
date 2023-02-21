import React from 'react'
import '../Comp_css/Univer.css'
// import Accordian from './Accordian';
import ChoiceUn from './ChoiceUn';
// import Card from './Card';
// import { useCallback } from "react";
// const axios = require('axios');

class University extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        var s_name = props.title;
        console.log(s_name)
        this.state = {
            items: [],
            DataisLoaded: false,
            s_name: props.title
        };
    }

    componentDidMount() {
        const { s_name } = this.state;
        // var s_name = { props.title };
        // fetch("https://jsonplaceholder.typicode.com/users")
        fetch(`http://localhost:4000/un/${s_name}`, { params: { s_name } })
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render(props) {

        const { DataisLoaded, items, s_name } = this.state;
        if (!DataisLoaded) return <div>
            <h1> wait some time.... </h1> </div>;

        return (
            <div className='main'>
                {/* <div id='s_label'>{title}</div> */}
                <div className="container1">
                    <div className="univ">
                        <div className="uni" >
                            {
                                items.map((item) => (
                                    < ChoiceUn
                                        title={item}
                                        s_name={s_name}
                                    />
                                ))
                            }
                        </div >
                    </div>

                </div>

            </div>

        );
    }
}

export default University;

// import React from 'react'
// export const University = () => {
//     return (
//         <div>hello</div>
//     );
// }

// import React from "react";
// import './css/pr.css';