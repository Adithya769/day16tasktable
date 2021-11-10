import React from "react";

function Football(){
    const shoot =() =>{
        alert("Great Shot!");
    }
    return(
        <button onClick={shoot}>take the shot!</button>
    );
}
export default Football;