import React from "react";
import ButtonMemo from "./button/button-func";
import { useRef } from "react";

function Sounds(props) {

    const buttonCompRef = useRef();

    //References
    let container = React.useRef(null);
    let prod = React.useRef(null);
    let relax = React.useRef(null);
    let great = React.useRef(null);
    let random = React.useRef(null);

    let styling = (e) => {
        e.preventDefault();

        if (container.current.scrollTop === 0) {
            container.current.classList.add("juju");
        }
    };

    let randomNum = (min, max) => {
        let r = Math.floor(Math.random() * (max - min + 1)) + min;
        let d = undefined;

        if (r === 1) d = "Rain";
        else if (r === 2) d = "Thunder";
        else if (r === 3) d = "Snow";
        else if (r === 4) d = "River";
        else if (r === 5) d = "Library";
        else if (r === 6) d = "Keyboard";
        else if (r === 7) d = "Café";
        else if (r === 8) d = "Birds";
        else if (r === 9) d = "Ocean";
        else if (r === 10) d = "Wind";
        else if (r === 11) d = "Bath";
        else if (r === 12) d = "Crowd";
        else if (r === 13) d = "Campfire";
        else if (r === 14) d = "Ticking";
        else if (r === 15) d = "Radio";
        else if (r === 16) d = "Trees";
        else d = undefined;

        return d;
    };

    let randomSounds = () => {
        let s1 = randomNum(1, 16);
        console.log(s1);

        buttonCompRef.current.showAlert();
    };

    window.addEventListener("scroll", styling);

    return (
        /*
        <button onClick={() => buttonCompRef.current.showAlert()}>
            Click Me
        </button> 
        */

        <div className="sounds--body" ref={container}>
            <div className="sounds--search">
                <div className="filters">
                    <button className="filters--one" ref={prod}>
                        <span>🧘🏻</span>
                    </button>
                    <button className="filters--two" ref={relax}>
                        <span>⚙️</span>
                    </button>
                    <button className="filters--three" ref={great}>
                        <span>🥇</span>
                    </button>
                </div>

                <div className="random">
                    <button ref={random} onClick={randomSounds}>
                        <i className="fas fa-random"></i>
                    </button>
                </div>
            </div>

            <div className="sounds--container">
                <div className="sounds--row">
                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Rain"
                            icon="fas fa-cloud-rain"
                            container={container}
                            audio={require("./audio/rain.mp3")}
                            ref={buttonCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Thunder"
                            icon="fas fa-bolt"
                            container={container}
                            audio={require("./audio/thunder.mp3")}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Snow"
                            icon="fas fa-snowflake"
                            container={container}
                            audio={require("./audio/snow.mp3")}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="River"
                            icon="fas fa-water"
                            container={container}
                            audio={require("./audio/river-1.mp3")}
                        />
                    </div>
                </div>

                <div className="sounds--row">
                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Library"
                            icon="fas fa-book"
                            container={container}
                            audio={undefined}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Keyboard"
                            icon="fas fa-keyboard"
                            container={container}
                            audio={require("./audio/keyboard.mp3")}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Café"
                            icon="fas fa-mug-hot"
                            container={container}
                            audio={require("./audio/cafe.mp3")}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Birds"
                            icon="fas fa-dove"
                            container={container}
                            audio={require("./audio/birds.mp3")}
                        />
                    </div>
                </div>

                <div className="sounds--row">
                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Ocean"
                            icon="fas fa-anchor"
                            container={container}
                            audio={require("./audio/ocean.mp3")}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Wind"
                            icon="fas fa-wind"
                            container={container}
                            audio={require("./audio/wind-2.mp3")}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Bath"
                            icon="fas fa-bath"
                            container={container}
                            audio={require("./audio/bath.mp3")}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Crowd"
                            icon="fas fa-users"
                            container={container}
                            audio={require("./audio/crowd.mp3")}
                        />
                    </div>
                </div>

                <div className="sounds--row">
                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Campfire"
                            icon="fas fa-fire"
                            container={container}
                            audio={require("./audio/campfire.mp3")}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Ticking"
                            icon="fas fa-clock"
                            container={container}
                            audio={require("./audio/ticking.mp3")}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Radio"
                            icon="fas fa-broadcast-tower"
                            container={container}
                            audio={require("./audio/radio-2.mp3")}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Trees"
                            icon="fas fa-tree"
                            container={container}
                            audio={require("./audio/forest.mp3")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Sounds;