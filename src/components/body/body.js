import React, { Component } from "react";

import InfoMemo from "../info/info";
import SoundsMemo from "../sounds/sounds-func";
import FooterMemo from "../footer/footer";
import BackgroundMemo from "../background/background";

class Body extends Component {
    constructor() {
        super();

        this.body = React.createRef();
    }

    render() {
        return(
            <div className = "mainBody">
                <InfoMemo ref = { this.body } />
                <SoundsMemo body = {this.body} />
                <FooterMemo />
                <BackgroundMemo />
            </div>
        )
    }
}

const BodyMemo = React.memo(Body);
export default BodyMemo;