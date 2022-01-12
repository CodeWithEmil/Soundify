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
                        <button className = "filters--one"><span>🧘🏻</span></button>
                        <button className = "filters--two"><span>⚙️</span></button>
                        <button className = "filters--three"><span>🥇</span></button>
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

                        <div className = "sounds--icon--container">
                            <Button name = "Thunder" icon = "fas fa-bolt" container = {this.container} />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Snow" icon = "fas fa-snowflake" container = {this.container} />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "River" icon = "fas fa-water" container = {this.container} />
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <Button name = "Library" icon = "fas fa-book" container = {this.container} />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Keyboard" icon = "fas fa-keyboard" container = {this.container} />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Cafe" icon = "fas fa-coffee" container = {this.container} />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Birds" icon = "fas fa-dove" container = {this.container} />
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <Button name = "Ocean" icon = "fas fa-anchor" container = {this.container} />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Wind" icon = "fas fa-wind" container = {this.container} />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Bath" icon = "fas fa-bath" container = {this.container} />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Crowd" icon = "fas fa-users" container = {this.container} />
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <Button name = "Campfire" icon = "fas fa-fire" container = {this.container} />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Ticking" icon = "fas fa-clock" container = {this.container} />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Radio" icon = "fas fa-broadcast-tower" container = {this.container} />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Trees" icon = "fas fa-tree" container = {this.container} />
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default Sounds;