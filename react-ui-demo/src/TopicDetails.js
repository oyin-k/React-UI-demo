import React, { Component }  from "react";
import './App.css';

const TopicDetails = ({topicDetails}) => {
        return (
            <div className="topic-details">
                <p>{topicDetails}</p>
            </div>
        );
} 

export default TopicDetails;