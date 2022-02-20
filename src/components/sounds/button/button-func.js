import React, { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { forwardRef, useRef, useImperativeHandle, useState } from "react";


const Button1 = forwardRef((props, ref) => {
    //Properties
    let name = props.name;
    let icon = props.icon;
    let sound = props.sound;
    let audio = props.audio;

    //Included elements
    let container = props.container;

    //References
    let buttonGroup = useRef(null); //React.createRef();
    let audioElement = useRef(null);
    let buttonHover = useRef(null);
    let buttonContainer = useRef(null); //let props.innerRef;
    let volumeChanger = useRef(null);

    //State
    let [playing, setPlaying] = useState(true);
    let [volume, setVolume] = useState(0.5);

    //State regarding element's size
    let [smallEl, setSmallEl] = useState(true);
    let [smallElToggle, setSmallElToggle] = useState(false);
    let [smallElCounter, setSmallElCounter] = useState(false);

    useImperativeHandle(ref, () => ({
        showAlert() {
            alert("Hello from Child Component");
        },
    }));

    //The notification using https://react-hot-toast.com/
    let notif = () => toast.promise(`Default '${this.name}'`, {
        //Custom icon
        icon: "🚀",

        //Colors and styling
        iconTheme: {
            primary: "#24292f",
            secondary: "#f9fafb",
        },
        style: {
            "box-shadow": "rgba(17, 12, 46, 0.041) 0 48px 100px 0",
        },

        //Data
        id: "notif",
        className: "lighterShadow",

        //Aria
        ariaProps: {
            role: "status",
            "aria-live": "polite",
        },
    });

    let styling = e => {
        e.preventDefault();

        if (container.current.scrollTop === 0) {
            buttonContainer.current.classList.add("button--container--after");
            buttonHover.current.classList.add("button--container--after");
            volumeChanger.current.classList.remove("button--volume--before");
            volumeChanger.current.classList.remove("button--volume--before--show");
            volumeChanger.current.classList.add("button--volume");

            //Styles for the input element if the button was pressed (input shown) while changing from position
            if(smallElToggle && !smallElCounter) {
                //this.volumeChanger.current.classList.add("button--volume--before--show");
                volumeChanger.current.classList.remove("button--volume--before--show");
                volumeChanger.current.classList.add("button--volume--show");
                
                /*this.setState({
                    smallElCounter: true
                })*/

                setSmallElCounter(true);
            }

            /*this.setState({
                smallEl: false
            })*/
            setSmallEl(false);
        }
    }

    let manageVolume = (e) => {
        e.preventDefault();
        const userValue = e.target.value / 100;
        console.log(userValue);

        /*this.setState({
            volume: userValue,
        });*/

        setVolume(userValue);
        audioElement.current.volume = volume;

        return userValue;
    };

    let playPause = e => {
        e.preventDefault();

        //Clearing previous notifications
        toast.remove();

        //Displaying wether if it is playing or not
        console.log(`Playing audio? ${playing}`);
        buttonContainer.current.classList.toggle("button--container--clicked");
        
        if (smallEl) {
            volumeChanger.current.classList.toggle("button--volume--before--show");
            /*this.setState((state) => ({
                smallElToggle: !state.smallElToggle,
            }))*/

            setSmallElToggle(!smallElToggle)
        } else if (!smallEl){
            volumeChanger.current.classList.toggle("button--volume--show");
        }


        //Playing/pausing the audio
        if (audio === null || audio === "" || audio === undefined) {
            //window.alert("Error 001: Source not found.");
            buttonContainer.current.classList.remove("button--container--clicked");
            volumeChanger.current.classList.remove("button--volume--show");

            notif = () => toast.error(`Not found: '${name}'`, {
            //Custom icon
                icon: "😞",
        
                //Colors
                iconTheme: {
                    primary: '#24292f',
                    secondary: '#f9fafb',
                },
                /*style: {
                    "box-shadow": "rgba(17, 12, 46, 0.041) 0 48px 100px 0"
                },*/
        
                //Id
                id: "notif"
            });
        } else if(playing) {
            audioElement.current.play();

            notif = () => toast.success(`Playing '${name}'`, {
                //Custom icon
                icon: "🥑", //😄 , 🍀 , 🥑
        
                //Colors
                iconTheme: {
                    primary: '#24292f',
                    secondary: '#f9fafb',
                  },
        
                  //Id
                  id: "notif"
            });
        } else if (!playing) {
            audioElement.current.pause();
            //this.audioElement.current.volume = "50%";

            notif = () => toast.error(`Paused '${name}'`, {
                //Custom icon
                icon: "🍿", //😕 , 🍿
        
                //Colors
                iconTheme: {
                    primary: '#24292f',
                    secondary: '#f9fafb',
                  },
        
                  //Id
                  id: "notif"
            });
        } else {
            //window.confirm("An unknown error ocurred. Maybe try again?");

            notif = () => toast.error(`An unknown error occurred!`, {
                //Custom icon
                icon: "🤔", //🤔
        
                //Colors
                iconTheme: {
                    primary: '#24292f',
                    secondary: '#f9fafb',
                  },
        
                  //Id
                  id: "notif"
            });
        }

        //Changing the State's values
        /*this.setState({
            playing: !this.state.playing
        })*/

        setPlaying(!playing);
        
        //Displaying a Toast (notification)
        toast.remove();
        return notif();
    }

    //Executing methods
    //window.addEventListener("scroll", this.styling);

    return <h1>hello world</h1>;
})

class Button extends Component {
    //Some styles when we scroll the page

    //Playing and pausing the audio
    

    /*volume = e => {
        e.preventDefault();
        const userValue = e.target.value / 100;
        console.log(userValue)

        this.setState({
            volume: userValue
        })

        this.audioElement.current.volume = this.state.volume;

        return userValue;
    }*/

    componentDidMount() {
        this.audioElement.current.volume = this.state.volume;
    }

    render() {
        return(
            <div className = "button--group" ref = { this.buttonGroup }>
                <audio ref = { this.audioElement } src = { this.audio } type="audio/mpeg" loop />

                <div className = "button--hover" ref = { this.buttonHover } ></div>

                <div className = "button--volume--before" ref = { this.volumeChanger }>
                    <input type = "range" onInput = { this.volume } onChange = { this.volume } />
                </div>

                <div className = "button--container" ref = { this.buttonContainer } onClick = { this.playPause } >
                    <div className = "button--name">
                        <h3>{ this.props.name }</h3>
                    </div>
                    <div className = "button--icon">
                        <i className = {this.props.icon}></i>
                    </div>
                </div>

                <Toaster />

            </div>
        )
    }
}

const ButtonMemo = React.memo(Button1);
export default ButtonMemo;
//export default React.forwardRef((props, ref) => <ButtonMemo innerRef={ref} {...props} />);