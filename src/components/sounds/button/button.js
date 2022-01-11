import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);

        //Properties
        this.name = this.props.name;
        this.icon = this.props.icon;
        this.sound = this.props.sound;

        //Included elements
        this.container = this.props.container;

        //References
        this.buttonContainer = React.createRef();

        //Executing a Method
        window.addEventListener('scroll', this.styling);
    }

    styling = e => {
        e.preventDefault();

        if (this.container.current.scrollTop === 0) {
            this.buttonContainer.current.classList.remove("button--container--before")
            this.buttonContainer.current.classList.add("button--container--after");
        }

    }

    render() {
        return(
            <div className = "button--container button--container--before" ref = { this.buttonContainer }>
                <div className = "button--name">
                    <h3>{ this.props.name }</h3>
                </div>
                <div className = "button--icon">
                    <i className = {this.props.icon}></i>
                </div>
            </div>
        )
    }
}

export default Button;