import React from "react";
import './myruns.css';

function MissRuns(){
    return <div className="middle"><h1 className="missruns">OH! NO RUNS</h1></div>;
}
function MadeRuns(props){
    return <h1 className="maderuns">WE got {props.scored} RUNS</h1>
}

function Cricket(props){
    const isCricket = props.isCricket;
    const run = props.scored;
    if(isCricket){
        return <MadeRuns scored={run}/>;     
    }
    return <MissRuns/>
}

export default Cricket;