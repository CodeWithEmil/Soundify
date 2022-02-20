import React from "react";
import ButtonMemo from "./button/button-func";
import { useRef } from "react";

function Sounds(props) {

    //Components
    const rainCompRef = useRef();
    const libraryCompRef = useRef();
    const oceanCompRef = useRef();
    const campfireCompRef = useRef();
    const thunderCompRef = useRef();
    const keyboardCompRef = useRef();
    const windCompRef = useRef();
    const tickingCompRef = useRef();
    const snowCompRef = useRef();
    const cafeCompRef = useRef();
    const bathCompRef = useRef();
    const radioCompRef = useRef();
    const riverCompRef = useRef();
    const birdsCompRef = useRef();
    const crowdCompRef = useRef();
    const treesCompRef = useRef();

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

        if (r === 1) d = [rainCompRef, "Rain"];
        else if (r === 2) d = [thunderCompRef, "Thunder"];
        else if (r === 3) d = [snowCompRef, "Snow"];
        else if (r === 4) d = [riverCompRef, "River"];
        else if (r === 5) d = [libraryCompRef, "Library"];
        else if (r === 6) d = [keyboardCompRef, "Keyboard"];
        else if (r === 7) d = [cafeCompRef, "Café"];
        else if (r === 8) d = [birdsCompRef, "Birds"];
        else if (r === 9) d = [oceanCompRef, "Ocean"];
        else if (r === 10) d = [windCompRef, "Wind"];
        else if (r === 11) d = [bathCompRef, "Bath"];
        else if (r === 12) d = [crowdCompRef, "Crowd"];
        else if (r === 13) d = [campfireCompRef, "Campfire"];
        else if (r === 14) d = [tickingCompRef, "Ticking"];
        else if (r === 15) d = [radioCompRef, "Radio"];
        else if (r === 16) d = [treesCompRef, "Trees"];
        else d = undefined;

        console.log(d[1])
        return d[0];
    };

    let randomSounds = () => {
        let s1 = randomNum(1, 16);
        let s2 = randomNum(1, 16);
        let s3 = randomNum(1, 16);

        s1.current.showAlert();
        s2.current.showAlert();
        s3.current.showAlert();
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
                            ref={rainCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Thunder"
                            icon="fas fa-bolt"
                            container={container}
                            audio={require("./audio/thunder.mp3")}
                            ref={thunderCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Snow"
                            icon="fas fa-snowflake"
                            container={container}
                            audio={require("./audio/snow.mp3")}
                            ref={snowCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="River"
                            icon="fas fa-water"
                            container={container}
                            audio={require("./audio/river-1.mp3")}
                            ref={riverCompRef}
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
                            ref={libraryCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Keyboard"
                            icon="fas fa-keyboard"
                            container={container}
                            audio={require("./audio/keyboard.mp3")}
                            ref={keyboardCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Café"
                            icon="fas fa-mug-hot"
                            container={container}
                            audio={require("./audio/cafe.mp3")}
                            ref={cafeCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Birds"
                            icon="fas fa-dove"
                            container={container}
                            audio={require("./audio/birds.mp3")}
                            ref={birdsCompRef}
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
                            ref={oceanCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Wind"
                            icon="fas fa-wind"
                            container={container}
                            audio={require("./audio/wind-2.mp3")}
                            ref={windCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Bath"
                            icon="fas fa-bath"
                            container={container}
                            audio={require("./audio/bath.mp3")}
                            ref={bathCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Crowd"
                            icon="fas fa-users"
                            container={container}
                            audio={require("./audio/crowd.mp3")}
                            ref={crowdCompRef}
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
                            ref={campfireCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Ticking"
                            icon="fas fa-clock"
                            container={container}
                            audio={require("./audio/ticking.mp3")}
                            ref={tickingCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Radio"
                            icon="fas fa-broadcast-tower"
                            container={container}
                            audio={require("./audio/radio-2.mp3")}
                            ref={radioCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Trees"
                            icon="fas fa-tree"
                            container={container}
                            audio={require("./audio/forest.mp3")}
                            ref={treesCompRef}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Sounds;