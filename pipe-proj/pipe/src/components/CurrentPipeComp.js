import React from 'react';

function CurrentPipeComp(props) {

    const pipe = props.pipeline.get();

    return (
        <div>
            <h1>Current Pipe: {props.pipeline.name}</h1>
            <div className="clPanel-2">
                <div className="clItem-1">ID:</div>
                <div className="clItem-2">{pipe.id}</div>

                <div className="clItem-1">Length:</div>
                <div className="clItem-2">{pipe.length}</div>
                
                <div className="clItem-1">Diameter:</div>
                <div className="clItem-2">{pipe.diameter}</div>
                
                <div className="clItem-1">Quality:</div>
                <div className="clItem-2">{pipe.quality}</div>
            </div>
            <br/>
            <button className="clButton" todo="prev"> {`<==`}  {pipe.prevPipe.id}</button>
            <button className="clButton" todo="next"> {pipe.nextPipe.id} {`==>`}</button>
        </div>
    )
}

export default CurrentPipeComp;