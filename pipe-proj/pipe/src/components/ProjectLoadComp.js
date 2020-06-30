
import React, { useState, useEffect } from 'react';
import communicate from '../pipebusiness/communicate';

function ProjectLoadComp(props) {

    const [msg, setMsg] = useState("");
    const [pls, setPls] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                setPls(await communicate.getProjects());
                setMsg("");
            } catch (e) {
                setMsg("Server Error - ???" + e);
            }
        }
        fetchData();
    }, []);

    const plsToDisplay = pls.map((p, i) => {
        return <div key={i} id={p[0]} className="clListItem" todo="load"> {p[1]} </div>;
    })

    return (
        <div className="clList">
            <h1>Load a Project</h1>
            {msg}
            {plsToDisplay}
            <br/>
            <button className="clButton" todo="cancel">Cancel</button>

        </div>
    )
}

export default ProjectLoadComp;