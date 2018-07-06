import React, { Component }  from "react";
import './App.css';
import TopicNumber from './TopicNumber'

class Topics extends Component {
    render() {
        return (
            <div className="topics">
                <TopicNumber />
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active btn btn-success" href="#">Guidance</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn" href="#">Development</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn" href="#">Delivery</a>
                    </li>
                </ul>
            </div>
        );
    }
} 

export default Topics;