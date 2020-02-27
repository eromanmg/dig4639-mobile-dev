import React from 'react';
import './index.css';

class Card extends React.Component{
    constructor(props) {
        super(props)
        // this.props = props;
        // this.element = document.createElement("div");
        // this.element.innerHTML = this.props.content;
        // let span = document.createElement("span");
        // this.element.appendChild(span);
        // span.innerHTML = this.props.content;
        // this.element.className = "card";
    }
    render() {
        return <p className="card">{this.props.content}</p>;
    }
}

export default Card;