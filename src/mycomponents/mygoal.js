import React from "react";
import './mygoal.css';

function MissGoal(){
    return <h1 className="miss-goal">AH! GOALMISSED!</h1>
}
function MadeGoal(){
    return <h1 className="made-goal" >WOW!GOAL!</h1>
}
function Goal(props){
    const isGoal = props.isGoal;
    if(isGoal){
        return <MadeGoal/>;
    }
    return <MissGoal/>;
}

export default Goal;