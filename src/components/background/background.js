import React from "react";

function Background() {
    return (
        <div className="background--container">
            <div className="background--icon--one">
                <i className="fa-solid fa-music icon--one"></i>
                <i className="fa-solid fa-music icon--two"></i>
            </div>

            <div className="background--icon--two">
                <i className="fa-solid fa-guitar icon--one"></i>
                <i className="fa-solid fa-guitar icon--two"></i>
            </div>
            <div className="background--icon--three">
                <i className="fa-solid fa-headphones icon--one"></i>
                <i className="fa-solid fa-headphones icon--two"></i>
            </div>
            <div className="background--icon--four">
                <i className="fa-solid fa-peace icon--one"></i>
                <i className="fa-solid fa-peace icon--two"></i>
            </div>
            <div className="background--icon--five">
                <i className="fa-solid fa-microphone icon--one"></i>
                <i className="fa-solid fa-microphone icon--two"></i>
            </div>
            <div className="background--icon--six">
                <i className="fa-solid fa-music icon--one"></i>
                <i className="fa-solid fa-music icon--two"></i>
            </div>
            <div className="background--icon--seven">
                <i className="fa-solid fa-drum icon--one"></i>
                <i className="fa-solid fa-drum icon--two"></i>
            </div>
            <div className="background--icon--eight">
                <i className="fa-solid fa-microphone icon--one"></i>
                <i className="fa-solid fa-microphone icon--two"></i>
            </div>
        </div>
    );
}

const BackgroundMemo = React.memo(Background);
export default BackgroundMemo;