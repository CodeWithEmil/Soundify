import React, { Component } from "react";
import Button from "./button/button";

class Sounds extends Component {

    constructor(props) {
        super(props);

        //Creating References
        this.container = React.createRef();
        this.body = this.props.body;
            //References for Sounds
            this.rain = React.createRef(null);
        
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
                            <Button name = "Rain" icon = "fas fa-cloud-rain" container = {this.container} audio = { require("./audio/rain.mp3") } ref = { this.rain } />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Thunder" icon = "fas fa-bolt" container = {this.container} audio = { require("./audio/thunder.mp3") } />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Snow" icon = "fas fa-snowflake" container = {this.container} audio = { require("./audio/snow.mp3") } />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "River" icon = "fas fa-water" container = {this.container} audio = { require("./audio/river-1.mp3") } />
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <Button name = "Library" icon = "fas fa-book" container = {this.container} audio = { undefined } />
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Keyboard" icon = "fas fa-keyboard" container = {this.container} audio = { require("./audio/keyboard.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Café" icon = "fas fa-mug-hot" container = {this.container} audio = { require("./audio/cafe.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Birds" icon = "fas fa-dove" container = {this.container} audio = { require("./audio/birds.mp3") }/>
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <Button name = "Ocean" icon = "fas fa-anchor" container = {this.container} audio = { require("./audio/ocean.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Wind" icon = "fas fa-wind" container = {this.container} audio = { require("./audio/wind-2.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Bath" icon = "fas fa-bath" container = {this.container} audio = { require("./audio/bath.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Crowd" icon = "fas fa-users" container = {this.container} audio = { require("./audio/crowd.mp3") }/>
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <Button name = "Campfire" icon = "fas fa-fire" container = {this.container} audio = { require("./audio/campfire.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Ticking" icon = "fas fa-clock" container = {this.container} audio = { require("./audio/ticking.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Radio" icon = "fas fa-broadcast-tower" container = {this.container} audio = { require("./audio/radio-2.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <Button name = "Trees" icon = "fas fa-tree" container = {this.container} audio = { require("./audio/forest.mp3") }/>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default Sounds;