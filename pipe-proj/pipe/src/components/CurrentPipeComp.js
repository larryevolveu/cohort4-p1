import React from 'react';

function CurrentPipeComp(props) {

    const pipe = props.pipeline.get();

    return (
        <div>
            <h1>Current Pipe: {props.pipeline.name}</h1>
            <div>
                ID {pipe.id}
            </div>
            <div>
                Length {pipe.length}
            </div>
            <div>
                Diameter  {pipe.diameter}
            </div>
            <div>
                Quality {pipe.quality}
            </div>
            <button className="clButton" todo="prev"> {`<==`}  {pipe.prevPipe.id}</button>
            <button className="clButton" todo="next"> {pipe.nextPipe.id} {`==>`}</button>
        </div>
    )
}

export default CurrentPipeComp;