import React, { Component }  from "react";
import './App.css';
import TopicDetails from "./TopicDetails";
import Topics from './Topics';

class Playground extends Component {
    render() {
        return (
            <div className="playground">
                <div className="row">
                    <div className="col-sm">
                        <Topics />    
                    </div>
                    <div className="col-sm">
                        <TopicDetails />
                    </div>
                </div>
            </div>
        );
    }
} 

export default Playground;