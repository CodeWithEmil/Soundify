import React, { Component } from "react";

import Info from "../info/info";
import Sounds from "../sounds/sounds-func";

class Body extends Component {
    constructor() {
        super();

        this.body = React.createRef();
    }

    render() {
        return(
            <div className = "mainBody">
                <Info ref = { this.body } />
                <Sounds body = {this.body} />
            </div>
        )
    }
}

export default Body;