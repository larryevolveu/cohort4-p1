import React, { useState } from 'react';

function ProjectComp(props) {

    const [msg, setMsg] = useState("");

    function onTalk() {
        console.log("onTalk");
        
    }

    return (
        <div>
            <h1>Project Component</h1>
            {msg}
            <button onClick={onTalk}>Talk and Play</button>
        </div>
    )
}

export default ProjectComp;