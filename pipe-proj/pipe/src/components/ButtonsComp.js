import React from 'react';

function ButtonsComp() {
    return (
        <div>
            <div>
                <button className="clButton" todo="new">New</button>
            </div>
            <div>
            <button className="clButton" todo="projects">Load Project</button>
            <button className="clButton" todo="newproject">New Project</button>
            <button className="clButton" todo="savepage">Save Project</button>
            </div>
        </div>
    )
}

export default ButtonsComp;