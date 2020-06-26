
import React, { useState } from 'react';
import commFuncs from '../pipebusiness/communicate';

function ProjectSaveComp(props) {

    const [msg, setMsg] = useState("");

    async function onSave() {

        const name = document.getElementById("idName").value;
        if (!name) {
            setMsg("Name must be entered.");
            return;
        }
        props.pipeline.name = name;
        let id = props.pipeline.id;
        if(!id) {id = 0}
        const data = props.pipeline.toJSON();

        const resp = await commFuncs.saveProject(id, name, data);
        props.pipeline.id = resp.id

        props.show();

    }

    return (
        <div>
            <h1>Save a Project</h1>
            {msg}
            <div>
                <input className="clButton" placeholder="Project Name" id="idName" defaultValue={props.pipeline.name}></input>
            </div>
            <button className="clButton" todo="cancel">Cancel</button>
            <button className="clButton" onClick={onSave}>Save</button>

        </div>
    )
}

export default ProjectSaveComp;