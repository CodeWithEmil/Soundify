import React, { Component } from "react";
import ButtonMemo from "./button/button";

class Sounds extends Component {

    constructor(props) {
        super(props);

        //Creating References
        this.container = React.createRef();
        this.body = this.props.body;
        
        //Executing events
        window.addEventListener('scroll', this.styling);

        //State
        this.state = {
            callMethod: false,

            firstSound: undefined,
            secondSound: undefined,
            thirdSound: undefined
        }

        //Events
        this.handleClick = this.handleClick.bind(this);
    }

    //Gives some styles when the page is scrolled at first
    styling = e => {
        e.preventDefault();

        if (this.container.current.scrollTop === 0) {
            this.container.current.classList.add("juju")
        }
    }

    //Extra methods for Random
        //Generate random number between MIN and MAX
        numberGenerator = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        //Deciding which sound to play
        chooseSound = (num) => {
            let rest = undefined;

            if (num === 1) {
                rest = "Rain";
            } else if (num === 2) {
                rest = "Library";
            } else if (num === 3) {
                rest = "Ocean";
            } else if (num === 4) {
                rest = "Campfire";
            } else if (num === 5) {
                rest = "Thunder";
            } else if (num === 6) {
                rest = "Keyboard";
            } else if (num === 7) {
                rest = "Wind";
            } else if (num === 8) {
                rest = "Ticking";
            } else if (num === 9) {
                rest = "Snow";
            } else if (num === 10) {
                rest = "Café";
            } else if (num === 11) {
                rest = "Bath";
            } else if (num === 12) {
                rest = "Radio";
            } else if (num === 13) {
                rest = "River";
            } else if (num === 14) {
                rest = "Birds";
            } else if (num === 15) {
                rest = "Crowd";
            } else if (num === 16) {
                rest = "Trees";
            }

            return rest;
        }

    //Play 3 random sounds
    random = (min, max) => {
        let firstSound = this.numberGenerator(min, max);
        let secondSound = this.numberGenerator(min, max);
        let thirdSound = this.numberGenerator(min, max);

        /*if(firstSound === secondSound || secondSound === thirdSound || thirdSound === firstSound) {
            firstSound = this.numberGenerator(min, max);
            secondSound = this.numberGenerator(min, max);
            thirdSound = this.numberGenerator(min, max);
        }*/

        console.log(`First sound: "${firstSound}"`);
        console.log(`Second sound: "${secondSound}"`);
        console.log(`Third sound: "${thirdSound}"`);


        console.log(`. . . . . . . . . . . . . . `);


        let first = this.chooseSound(firstSound);
        let second = this.chooseSound(secondSound);
        let third = this.chooseSound(thirdSound);
        first.toString();
        second.toString();
        third.toString();

        console.log(`First sound's name: "${first}"`);
        console.log(`Second sound's name: "${second}"`);
        console.log(`Third sound's name: "${third}"`);

        console.log(`. . . . . . . . . . . . . . `);
        
        this.state.firstSound = first;
        console.log(`First sound "${this.state.firstSound}" ---  ${firstSound}`);
        this.state.secondSound = second;
        console.log(`Second sound "${this.state.secondSound}" ---  ${secondSound}`);
        this.state.thirdSound = third;
        console.log(`Third sound "${this.state.thirdSound}" ---  ${thirdSound}`);

        return null;
    }

    handleClick = e => {

        this.random(1, 16);
        
        this.setState({
            callMethod: true
        })

        console.log(this.state.callMethod);

        this.container.forceUpdate();
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
                        <button onClick = { this.handleClick.bind(this) }>
                            <i className = "fas fa-random"></i>
                        </button>
                    </div>
                </div>

                <div className = "sounds--container">



                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Rain" icon = "fas fa-cloud-rain" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound } method = { this.state.callMethod } audio = { require("./audio/rain.mp3") } />
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Thunder" icon = "fas fa-bolt" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound } method = { this.state.callMethod } audio = { require("./audio/thunder.mp3") } />
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Snow" icon = "fas fa-snowflake" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/snow.mp3") } ref = { this.snow } />
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "River" icon = "fas fa-water" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound } method = { this.state.callMethod } audio = { require("./audio/river-1.mp3") } />
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Library" icon = "fas fa-book" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound } method = { this.state.callMethod } audio = { undefined } />
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Keyboard" icon = "fas fa-keyboard" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/keyboard.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Café" icon = "fas fa-mug-hot" container = {this.container} oone = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/cafe.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Birds" icon = "fas fa-dove" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/birds.mp3") }/>
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Ocean" icon = "fas fa-anchor" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/ocean.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Wind" icon = "fas fa-wind" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/wind-2.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Bath" icon = "fas fa-bath" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/bath.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Crowd" icon = "fas fa-users" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/crowd.mp3") }/>
                        </div>
                    </div>

                    <div className = "sounds--row">
                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Campfire" icon = "fas fa-fire" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/campfire.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Ticking" icon = "fas fa-clock" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/ticking.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Radio" icon = "fas fa-broadcast-tower" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/radio-2.mp3") }/>
                        </div>

                        <div className = "sounds--icon--container">
                            <ButtonMemo name = "Trees" icon = "fas fa-tree" container = {this.container} one = { this.state.firstSound } two = { this.state.secondSound } three = { this.state.thirdSound }method = { this.state.callMethod } audio = { require("./audio/forest.mp3") }/>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default Sounds;