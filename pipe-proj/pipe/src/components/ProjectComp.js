import React, { useState } from 'react';
import postdata from '../pipebusiness/postdata';

function ProjectComp(props) {

    const url = 'http://localhost:5000/';

    const [msg, setMsg] = useState("");
    const [pls, setPls] = useState([]);

    async function onTestGet() {

        // console.log("onTalk");
        try {
            setPls(await postdata(url + 'list'));
            console.log(pls);
        } catch (e) {
            setMsg("Server Error - ???" + e);
            console.log(e);
        }
        setMsg("List Complete");
    }

    async function onTestSend() {
        console.log("We are testing send");
        try {
            const myList = ["From React1", "This will be great", "Will it not"];
            // const ans = 
            await postdata(url + 'save', myList);
            // console.log(ans);
        } catch (e) {
            setMsg("Server Error - ???" + e);
            // console.log(e);
        }
        setMsg("Test Send Complete");
        
    }

    const plsToDisplay = pls.map((p,i) => {
        return <div key={i} todo="load"> {p} </div>;
    })
    // console.log("About the render ****", pls);
    
    function onProjClick(e) {
        console.log("onProjClick", e.target);
        const todo = e.target.getAttribute("todo");
        if (todo) {
            const proj = e.target.textContent;
            console.log("Do some work on :", proj);
        }

    }

    return (
        <div onClick={onProjClick}>
            <h1>Project Component</h1>
            {msg}
            {plsToDisplay}
            <button onClick={onTestGet}>Test Get</button>
            <button onClick={onTestSend}>Test Send</button>
        </div>
    )
}

export default ProjectComp;