import React, { useState } from 'react';

function NewPipeComp(props) {
    // console.log(props);

    const [msg, setMsg] = useState("");
    
    function get (id) {
        return document.getElementById(id).value;
    }

    function mySave() {
        // console.log("In My Save");
        const pipeLength = get("idLength");
        const diameter = get("idDiameter");
        const quality = get("idQuality");
       
        if (!pipeLength) {
            setMsg('You must enter a length');
            return;
        }

        // console.log(pipeLength, diameter, quality);
        // console.log(props);
        props.onSave(pipeLength, diameter, quality);


    }
    return (
        <div>
            <h1>NewPipeComp</h1>
            {msg}
            <div>
                Length <input id="idLength"></input>
            </div>
            <div>
                Diameter <input id="idDiameter"></input>
            </div>
            <div>
                Quality <input id="idQuality"></input>
            </div>
            <button onClick={mySave} >Save</button>
            <button todo="cancel">Cancel</button>
        </div>
    )
}

export default NewPipeComp;