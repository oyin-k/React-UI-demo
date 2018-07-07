import React, { Component }  from "react";
import './App.css';


class Topics extends Component {
    state = {numberActive: null}
    showTopicNumberActive = () => {
        this.setState({
            numberActive: 1
        })
    } 

    componentDidMount() {
        this.showTopicNumberActive();
    }

    render() {
        const {numberActive} = this.state;
        return (
            <div className="topics">
                <TopicNumber numberActive={numberActive}/>
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

function TopicNumber({numberActive}) {
    return(
        <div className="topic-number">
            <span>{numberActive}</span>
        </div>
    )
}

export default Topics;