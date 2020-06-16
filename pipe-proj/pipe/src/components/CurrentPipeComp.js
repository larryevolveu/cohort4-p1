import React from 'react';

function CurrentPipeComp(props) {
    // console.log(props);

    return (
        <div>
            <h1>Current Pipe</h1>
            <div>
                ID {props.pipe.id}
            </div>
            <div>
                Length {props.pipe.length}
            </div>
            <div>
                Diameter  {props.pipe.diameter}
            </div>
            <div>
                Quality {props.pipe.quality}
            </div>
            <button todo="prev"> {`<==`}  {props.pipe.prevPipe.id}</button>
            <button todo="new">New</button>
            <button todo="next"> {props.pipe.nextPipe.id} {`==>`}</button>
        </div>
    )
}

export default CurrentPipeComp;