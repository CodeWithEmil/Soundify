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
        this.buttonHover = React.createRef();

        //Executing a Method
        window.addEventListener('scroll', this.styling);
    }

    styling = e => {
        e.preventDefault();

        if (this.container.current.scrollTop === 0) {
            this.buttonContainer.current.classList.add("button--container--after");
            this.buttonHover.current.classList.add("button--container--after");
        }

    }

    render() {
        return(
            <div className = "button--group">

                <div className = "button--hover" ref = { this.buttonHover } ></div>
                
                <div className = "button--container" ref = { this.buttonContainer }>
                    <div className = "button--name">
                        <h3>{ this.props.name }</h3>
                    </div>
                    <div className = "button--icon">
                        <i className = {this.props.icon}></i>
                    </div>
                </div>

            </div>
        )
    }
}

export default Button;