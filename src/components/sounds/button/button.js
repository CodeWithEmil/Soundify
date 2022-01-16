import React, { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';

class Button extends Component {
    constructor(props) {
        super(props);

        //Properties
        this.name = this.props.name;
        this.icon = this.props.icon;
        this.sound = this.props.sound;
        this.audio = this.props.audio;

        //Song selection
            this.one = this.props.one;
            this.two = this.props.two;
            this.three = this.props.three;

        this.callMethod = this.props.method;

        //Included elements
        this.container = this.props.container;

        //References
        this.buttonGroup = React.createRef();
        this.audioElement = React.createRef();
        this.buttonHover = React.createRef();
        this.buttonContainer = React.createRef();

        //State
        this.state = {
            playing: true,
            playBeginning: true,
            decision: false,
            counter: 0
        }

        //Executing methods
        window.addEventListener('scroll', this.styling);
        console.log(this.one)
        console.log(this.two)
        console.log(this.three)
    }

    //Some styles when we scroll the page
    styling = e => {
        e.preventDefault();

        if (this.container.current.scrollTop === 0) {
            this.buttonContainer.current.classList.add("button--container--after");
            this.buttonHover.current.classList.add("button--container--after");
        }
    }

    //The notification using https://react-hot-toast.com/
    notif = () => toast.promise(`Default '${this.name}'`, {
        //Custom icon
        icon: "🚀",

        //Colors and styling
        iconTheme: {
            primary: '#24292f',
            secondary: '#f9fafb',
        },
        style: {
            "box-shadow": "rgba(17, 12, 46, 0.041) 0 48px 100px 0"
        },

        //Data
        id: "notif",
        className: "lighterShadow",

        //Aria
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        }
    });

    //Playing and pausing the audio
    playPause = e => {
        e.preventDefault();

        //Clearing previous notifications
        toast.remove();

        //Displaying wether if it is playing or not
        console.log("Playing audio? " + this.state.playing);
        
        //Changing styles
        if(this.state.counter === 1) {
            if (!this.state.decision) {
                this.buttonContainer.current.classList.add("button--container--clicked");
            } else if(this.state.decision) {
                this.buttonContainer.current.classList.remove("button--container--clicked");
            }
        } else {
            this.buttonContainer.current.classList.toggle("button--container--clicked");
        }

        //Playing/pausing the audio
        if (this.audio === null || this.audio === "" || this.audio === undefined) {
            //window.alert("Error 001: Source not found.");
            this.buttonContainer.current.classList.remove("button--container--clicked");

            this.notif = () => toast.error(`Not found: '${this.name}'`, {
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
        } else if(this.state.playing) {
            this.audioElement.current.play();

            this.notif = () => toast.success(`Playing '${this.name}'`, {
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
        } else if (!this.state.playing) {
            this.audioElement.current.pause();

            this.notif = () => toast.error(`Paused '${this.name}'`, {
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

            this.notif = () => toast.error(`An unknown error occurred!`, {
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
        this.setState({
            playing: !this.state.playing,
            playingBeginning: !this.state.playingBeginning,
            decision: !this.state.decision
        })
        
        //Displaying a Toast (notification)
        toast.remove();
        return this.notif();
    }

    //Basically playPause() but adapted to when random is clicked
    beginning = e => {
        let array = [this.one, this.two, this.three];
        console.log(array)

        for(var i = 0; i < array.length; i++) {
            if (this.audio === "" && (this.one === this.name || this.two === this.name || this.three === this.name)) {
                //window.alert("Error 001: Source not found.");
                this.buttonContainer.current.classList.remove("button--container--clicked");
    
                this.notif = () => toast.error(`Not found: '${this.name}'`, {
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
            } else if(this.one === this.name || this.two === this.name || this.three === this.name) {
                this.audioElement.current.play();
    
                this.notif = () => toast.success(`Playing '${this.name}'`, {
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

                if(this.state.playBeginning) {
                    this.buttonContainer.current.classList.add("button--container--clicked");
                } else if (!this.state.playBeginning) {
                    this.buttonContainer.current.classList.remove("button--container--clicked");
                }
            } 
        }

        this.setState({
            playBeginning: !this.state.playBeginning
        })
         //console.log("Playing audio? " + this.state.playing);
        //return this.notif();
    }

    componentDidMount() {
        if(this.callMethod) {
            console.log("Changed props: DidMount")

            if(this.callMethod && this.state.counter === 0) {
                this.beginning();
                this.setState({
                    counter: 1
                });
                console.log(`button.js ${this.one}`);
                console.log(`button.js ${this.two}`);
                console.log(`button.js ${this.three}`);
            }
        }
    }

    componentDidUpdate(prevProps) {
        if(this.callMethod !== prevProps.callMethod) {
            console.log("Changed props: DidUpdate")

            if(this.callMethod && this.state.counter === 0) {
                this.beginning();
                this.setState({
                    counter: 1
                });
                console.log(`button.js ${this.one} : DidUpdate`);
                console.log(`button.js ${this.two} : DidUpdate`);
                console.log(`button.js ${this.three} : DidUpdate`);
            }
        }
    }

    render() {
        return(
            <div className = "button--group" ref = { this.buttonGroup } onClick = { this.playPause }>
                <audio ref = { this.audioElement } src = { this.audio } type="audio/mpeg" loop />

                <div className = "button--hover" ref = { this.buttonHover } ></div>

                <div className = "button--container" ref = { this.buttonContainer }>
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

const ButtonMemo = React.memo(Button);
export default ButtonMemo;

//export default Button;