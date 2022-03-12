import React, { Component } from "react";
import ButtonMemo from "./button/button";

class Sounds extends Component {

    constructor(props) {
        super(props);

        //Creating References
        this.body = this.props.body;
        this.container = React.createRef();
        this.prod = React.createRef();
        this.relax = React.createRef();
        this.great = React.createRef();
        this.random = React.createRef();
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

    randomNum = (min, max) => {
        let r = Math.floor(Math.random() * (max - min + 1)) + min;
        let d = undefined;

        if (r === 1)
            d = "Rain";
        else if (r === 2)
            d = "Thunder";
        else if (r === 3)
            d = "Snow";
        else if (r === 4)
            d = "River";
        else if (r === 5)
            d = "Library";
        else if (r === 6)
            d = "Keyboard";
        else if (r === 7)
            d = "Café";
        else if (r === 8)
            d = "Birds";
        else if (r === 9)
            d = "Ocean";
        else if (r === 10)
            d = "Wind";
        else if (r === 11)
            d = "Bath";
        else if (r === 12)
            d = "Crowd";
        else if (r === 13)
            d = "Campfire";
        else if (r === 14)
            d = "Ticking";
        else if (r === 15)
            d = "Radio";
        else if (r === 16)
            d = "Trees";
        else
            d = undefined;

        return d;
    }

    randomSounds = () => {
        console.log(this.randomNum(1, 16))
    };
        
    
    render() {
        
        return(
            <div className = "sounds--body" ref = { this.container }>
                <div className = "sounds--search">
                    <div className = "filters">
                        <button className = "filters--one" ref = {this.prod}><span>🧘🏻</span></button>
                        <button className = "filters--two" ref = {this.relax}><span>⚙️</span></button>
                        <button className = "filters--three" ref = {this.great}><span>🥇</span></button>
                    </div>

                    <div className = "random">
                        <button ref = {this.random} onClick = {this.randomSounds}><i className = "fas fa-random"></i></button>
                    </div>
                </div>

                <div className = "sounds--container">



                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Rain" icon = "fas fa-cloud-rain" container = {this.container} audio = { require("./audio/rain.mp3") } />
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Thunder" icon = "fas fa-bolt" container = {this.container} audio = { require("./audio/thunder.mp3") } />
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Snow" icon = "fas fa-snowflake" container = {this.container} audio = { require("./audio/snow.mp3") } />
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "River" icon = "fas fa-water" container = {this.container} audio = { require("./audio/river-1.mp3") } />
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Library" icon = "fas fa-book" container = {this.container} audio = { undefined } />
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Keyboard" icon = "fas fa-keyboard" container = {this.container} audio = { require("./audio/keyboard.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Café" icon = "fas fa-mug-hot" container = {this.container} audio = { require("./audio/cafe.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Birds" icon = "fas fa-dove" container = {this.container} audio = { require("./audio/birds.mp3") }/>
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Ocean" icon = "fas fa-anchor" container = {this.container} audio = { require("./audio/ocean.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Wind" icon = "fas fa-wind" container = {this.container} audio = { require("./audio/wind-2.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Bath" icon = "fas fa-bath" container = {this.container} audio = { require("./audio/bath.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Crowd" icon = "fas fa-users" container = {this.container} audio = { require("./audio/crowd.mp3") }/>
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Campfire" icon = "fas fa-fire" container = {this.container} audio = { require("./audio/campfire.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Ticking" icon = "fas fa-clock" container = {this.container} audio = { require("./audio/ticking.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Radio" icon = "fas fa-broadcast-tower" container = {this.container} audio = { require("./audio/radio-2.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Trees" icon = "fas fa-tree" container = {this.container} audio = { require("./audio/forest.mp3") }/>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default Sounds;