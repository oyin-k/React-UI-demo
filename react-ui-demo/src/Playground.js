import React, { Component }  from "react";
import './App.css';
// import TopicDetails from "./TopicDetails";
import Topics from './Topics';

const activeClass = {
    background: '#00FFA3',
    color: '#272727',
    boxShadow: '0 6px 14px 0 rgba(0,0,0,0.16)',
    lineHeight: '38px',
    borderRadius: '4px'
}

const GuidanceDetails = {
    id: 1,
    detail :'Lorem Ipsum HKvk for ief, kfef efuue  efwdow  bhjfe df hkldnh hvyegfikhh  hvhvhdw, wd efwff fqefeqf. Opewew hbfbbwub effq'
};
const DevelopmentDetails = {
    id: 2,
    detail :'Lorem Ipsum HKvk for ief, kfef efuue  efwdow  bhjfe df hkldnh hvyegfikhh  hvhvhdw, wd'
};
const DeliveryDetails = {
    id: 3,
    detail :'Lorem Ipsum HKvk for ief, kfef efuue  efwdow  bhjfe df'
};

class Playground extends Component {

    state = { topicDetails: GuidanceDetails.detail, topicNumber: GuidanceDetails.id }

    handleClick = e => {
        const topic = e.target.value;
        if (topic === "Guidance") {
            this.setState({
                topicDetails: GuidanceDetails.detail,
                topicNumber: GuidanceDetails.id,
            })
        }else if (topic === "Development") {
            this.setState({
                topicDetails: DevelopmentDetails.detail,
                topicNumber: DevelopmentDetails.id,
            })
        }else if (topic === "Delivery") {
            this.setState({
                topicDetails: DeliveryDetails.detail,
                topicNumber: DeliveryDetails.id,
            })
        }
        console.log(topic);
    }

    onActiveButton = () => {
        
    }
    
    render() {
        const {topicDetails, topicNumber, activeClass} = this.state
        return (
            <div className="playground">
                <div className="row">
                    <div className="col-sm">
                        <Topics topicNumber={topicNumber} handleClick={this.handleClick} />    
                    </div>
                    <div className="col-sm">
                        <TopicDetails topicDetails={topicDetails}/>
                    </div>
                </div>
            </div>
        );
    }
} 

const TopicDetails = ({topicDetails}) => {
    return (
        <div className="topic-details">
            <p>{topicDetails}</p>
        </div>
    );
} 

export default Playground;