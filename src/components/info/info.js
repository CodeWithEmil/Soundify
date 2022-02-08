import React, { Component } from "react";

class Info extends Component {
    render() {
        return(
            <div className = "header">
                <a className = "follow" href="http://twitter.com/intent/tweet?url=https://soundify.net&text=Get%20a%20better%20sense%20of%20%23life%20with%20Soundify%20by%20%40CodeWithEmil&original_referer=https://soundify.netlifyy.app"data-text="Get a better sense of life with Soundify! Created by @CodeWithEmil" data-related="CodeWithEmil" data-lang="en" data-show-count="false" target = "_blank" rel = "noopener noreferrer">
                    <h4>#SpreadLove</h4>
                    <i className = "fab fa-twitter"></i>
                </a>

                <h1>Sound<span className = "highlight">ify</span></h1>
                <h3>By <a href = "https://instagram.com/codewithemil" target = "_blank" rel = "noopener noreferrer">@CodeWithEmil</a>🍦</h3>
                <div className = "music-icon">
                    <hr className = "music-icon--first" />
                    <hr className = "music-icon--second" />
                    <hr className = "music-icon--third" />
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#010720" fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,149.3C384,160,480,128,576,101.3C672,75,768,53,864,53.3C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
        )
    }
}

//<h1>S<span className = "highlight">o</span>undi<span className = "highlight">f</span>y</h1>
//<img src = { require("../../images/music-icon.png") } alt = "d"/>

///*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#010720" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,165.3C384,149,480,75,576,69.3C672,64,768,128,864,138.7C960,149,1056,107,1152,85.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>*/

export default Info;