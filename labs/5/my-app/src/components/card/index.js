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
        // Add a button that closes the card with the className "close"
        // That button should call a function on CardList to remove the card using filter
        
        return <div className="card">
            <h3>{this.props.title}</h3>
            <h2>{this.props.content} {this.props.unit}</h2>
            <p>{this.props.detail}</p>
            
        </div>;
    }
}

export default Card;