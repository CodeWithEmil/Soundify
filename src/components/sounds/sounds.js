import React, { Component } from "react";
import Button from "./button/button";

class Sounds extends Component {

    constructor(props) {
        super(props);

        //Creating References
        this.container = React.createRef();
        this.body = this.props.body;
        
        window.addEventListener('scroll', this.styling);
    }

    styling = e => {
        e.preventDefault();

        if (this.container.current.scrollTop === 0) {
            this.container.current.classList.add("juju")
        }

    }
    
    render() {
        return(
            <div className = "sounds--body" ref = { this.container }>
                <div className = "sounds--search">
                    <div className = "filters">
                        <button className = "filters--one">Relax</button>
                        <button className = "filters--two">Productivity</button>
                        <button className = "filters--three">Greatness</button>
                    </div>

                    <div className = "random">
                        <button><i className = "fas fa-random"></i></button>
                    </div>
                </div>

                <div className = "sounds--container">

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <Button name = "Rain" icon = "fas fa-cloud-rain" container = {this.container} />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Sounds;