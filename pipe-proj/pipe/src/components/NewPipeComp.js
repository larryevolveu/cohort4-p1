import React, { useState } from 'react';

function NewPipeComp(props) {

    const [msg, setMsg] = useState("");

    function get(id) {
        return document.getElementById(id).value;
    }

    function mySave() {
        const pipeLength = get("idLength");
        const diameter = get("idDiameter");
        const quality = get("idQuality");

        if (!pipeLength) {
            setMsg('You must enter a length');
            return;
        }

        props.onSave(pipeLength, diameter, quality);

    }

    return (
        <div className="clInnerBox">
            <h1>NewPipeComp</h1>
            {msg}
            <div>
                <label>Length </label>
                <input id="idLength"></input>
            </div>
            <div>
                <label>Diameter </label>
                <input id="idDiameter"></input>
            </div>
            <div>
                <label>Quality </label>
                <input id="idQuality"></input>
            </div>
            <button onClick={mySave} >Save</button>
            <button todo="cancel">Cancel</button>
        </div>
    )
}

export default NewPipeComp;