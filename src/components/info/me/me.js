import React from "react";

const Me = () => {
    return (
        <a target = "_blank" rel = "noopener noreferrer" href = "https://github.com/codewithemill"  className = "pfp--container">
            <img className = "pfp" src="https://avatars.githubusercontent.com/codewithemill" alt = "CodeWithEmil" />
        </a>
    )
}

const MeMemo = React.memo(Me);
export default MeMemo;