import React, { Component }  from "react";
import PropTypes from 'prop-types'
import './App.css';



const Topics = ({handleClick, topicNumber}) => {
        
    return (
        <div className="topics">
            <TopicNumber topicNumber={topicNumber}/>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <button value="Guidance"  className="nav-link btn " href="#" onClick={handleClick} >Guidance</button>
                </li>
                <li className="nav-item">
                    <button value="Development" className="nav-link btn" href="#" onClick={handleClick} >Development</button>
                </li>
                <li className="nav-item">
                    <button value="Delivery" className="nav-link btn" href="#" onClick={handleClick} >Delivery</button>
                </li>
            </ul>
        </div>
    );
    
}

const TopicNumber = ({topicNumber}) => {
    return(
        <div className="topic-number">
            <span>{topicNumber}</span>
        </div>
    )
}

export default Topics;