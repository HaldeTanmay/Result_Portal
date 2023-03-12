import React from 'react'
import { motion } from 'framer-motion'
import { ThreeCircles} from 'react-loader-spinner'


import ChoiceUn from './ChoiceUn';
import './Styles.css'


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
                <motion.div 
                   className="university_container"
                   animate={{ y: [30,0],opacity:[0.6,1] }}
                   transition={{ type: "spring", duration: 3 }}
                >
                    <div className="university_card">
                            {
                                items.map((item) => (
                                    < ChoiceUn
                                        title={item}
                                        s_name={s_name}
                                    />
                                ))
                            }
                    </div>

                </motion.div>

        

        );
    }
}

export default University;
