import React from 'react';

function ButtonsComp() {
    return (
        <div>
            <button className="clButton">Prev</button>
            <button className="clButton" todo="new">New</button>
            <button className="clButton">Next</button>
        </div>
    )
}

export default ButtonsComp;