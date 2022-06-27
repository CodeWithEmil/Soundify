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

    //Data Management
    //let soundsChosen = [];

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

        /*soundsChosen[0].current.pause();
        soundsChosen[1].current.pause();
        soundsChosen[2].current.pause();

        soundsChosen.length = 0;
        soundsChosen.push(s1);
        soundsChosen.push(s2);
        soundsChosen.push(s3);*/

        s1.current.playPause();
        s2.current.playPause();
        s3.current.playPause();
    };

    let relaxingSounds = () => {
        rainCompRef.current.playPause();
        rainCompRef.current.manageVolume(60);

        thunderCompRef.current.playPause();
        thunderCompRef.current.manageVolume(20);

        windCompRef.current.playPause();
        windCompRef.current.manageVolume(40);
    };

    let productivitySounds = () => {
        birdsCompRef.current.playPause();
        birdsCompRef.current.manageVolume(80);

        treesCompRef.current.playPause();
        treesCompRef.current.manageVolume(20);

        riverCompRef.current.playPause();
        riverCompRef.current.manageVolume(10);
    };

    let greatnessSounds = () => {
        keyboardCompRef.current.playPause();
        keyboardCompRef.current.manageVolume(40);

        campfireCompRef.current.playPause();
        campfireCompRef.current.manageVolume(30);

        riverCompRef.current.playPause();
        riverCompRef.current.manageVolume(5);
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
                    <button
                        className="filters--one"
                        ref={prod}
                        onClick={relaxingSounds}
                    >
                        <span>🧘🏻</span>
                    </button>
                    <button
                        className="filters--two"
                        ref={relax}
                        onClick={productivitySounds}
                    >
                        <span>⚙️</span>
                    </button>
                    <button
                        className="filters--three"
                        ref={great}
                        onClick={greatnessSounds}
                    >
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
                            audio={
                                //require("./audio/rain.mp3")
                                "https://freesound.org/data/previews/531/531947_7707368-lq.mp3"
                            }
                            ref={rainCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Thunder"
                            icon="fas fa-bolt"
                            container={container}
                            audio={
                                //require("./audio/thunder.mp3")
                                "https://freesound.org/data/previews/237/237729_3839718-lq.mp3"
                            }
                            ref={thunderCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Snow"
                            icon="fas fa-snowflake"
                            container={container}
                            audio={
                                //require("./audio/snow.mp3")
                                "https://freesound.org/data/previews/336/336763_4040987-lq.mp3"
                            }
                            ref={snowCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="River"
                            icon="fas fa-water"
                            container={container}
                            audio={
                                //require("./audio/river-1.mp3")
                                "https://freesound.org/data/previews/365/365920_5121236-lq.mp3"
                            }
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
                            audio={
                                //undefined
                                "https://e8b8e3q2.ssl.hwcdn.net/sounds/people/delft-library160.mp3"
                            }
                            ref={libraryCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Keyboard"
                            icon="fas fa-keyboard"
                            container={container}
                            audio={
                                //require("./audio/keyboard.mp3")
                                "https://freesound.org/data/previews/537/537244_1920058-lq.mp3"
                            }
                            ref={keyboardCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Café"
                            icon="fas fa-mug-hot"
                            container={container}
                            audio={
                                //require("./audio/cafe.mp3")
                                "https://freesound.org/data/previews/564/564489_2975543-lq.mp3"
                            }
                            ref={cafeCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Birds"
                            icon="fas fa-dove"
                            container={container}
                            audio={
                                //require("./audio/birds.mp3")
                                "https://freesound.org/data/previews/387/387978_6221013-lq.mp3"
                            }
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
                            //audio={require("./audio/ocean.mp3/")}
                            audio={
                                "https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/ocean.mp3"
                            }
                            ref={oceanCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Wind"
                            icon="fas fa-wind"
                            container={container}
                            audio={
                                //require("./audio/wind-2.mp3")
                                "https://freesound.org/data/previews/408/408442_7155540-lq.mp3"
                            }
                            ref={windCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Bath"
                            icon="fas fa-bath"
                            container={container}
                            audio={
                                //require("./audio/bath.mp3")
                                "https://freesound.org/data/previews/332/332280_2084653-lq.mp3"
                            }
                            ref={bathCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Crowd"
                            icon="fas fa-users"
                            container={container}
                            audio={
                                //require("./audio/crowd.mp3")
                                "https://freesound.org/data/previews/360/360703_3471835-lq.mp3"
                            }
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
                            audio={
                                //require("./audio/campfire.mp3")
                                "https://freesound.org/data/previews/532/532191_9735871-lq.mp3"
                            }
                            ref={campfireCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Ticking"
                            icon="fas fa-clock"
                            container={container}
                            audio={
                                //require("./audio/ticking.mp3")
                                "https://freesound.org/data/previews/405/405423_7707368-lq.mp3"
                            }
                            ref={tickingCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Radio"
                            icon="fas fa-broadcast-tower"
                            container={container}
                            audio={
                                //require("./audio/radio-2.mp3")
                                "https://freesound.org/data/previews/222/222599_1693722-lq.mp3"
                            }
                            ref={radioCompRef}
                        />
                    </div>

                    <div className="sounds--icon--container">
                        <ButtonMemo
                            name="Trees"
                            icon="fas fa-tree"
                            container={container}
                            audio={
                                //require("./audio/forest.mp3")
                                "https://freesound.org/data/previews/530/530415_1648170-lq.mp3"
                            }
                            ref={treesCompRef}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

const SoundsMemo = React.memo(Sounds);
export default SoundsMemo;