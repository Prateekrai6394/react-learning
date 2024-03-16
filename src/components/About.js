// import React, { Component } from "react";
// import "./myindex.css"

// function About() {
//     return (
//         <>
//            <div className="box">
//            <h1 style={{color:"Blue",backgroundColor:"yellow"}}>About Component</h1>
//            <p>Code practice with Prateek Rai</p>
//            </div>

//         </>
//     )
// }
// export default About;


// internal CSS....react

import React, { Component } from "react";
import "./myindex.css"

const css = {
    width: "300px",
    height: "300px",
    backgroundColor: "pink",
    textAlign: "center",
    borderRadius: "11px",
    margin: "auto"
}

const youtube= "Prateek Levinho"
function About(props) {
    return (
        <>
            <div className="box" style={css}>
                <h1 >About Component : {props.name} {props.hobby} </h1>
                <p style={{ textShadow: "0px 6px 4px #ffe9c5", color: "blue " }}>Code practice with Prateek Rai</p>
            </div>

        </>
    )
}
export default About;
export {youtube};

