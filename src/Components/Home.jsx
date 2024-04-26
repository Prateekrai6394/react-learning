import React from "react";
import img from "../Images/react2 img.jpg.svg"
import Common from "./Common";

const Home = () => {
    return(
        <>
        <Common  name= 'Grow your business with' imgsrc= {img} visit= '/service' btname="Get Started" />
        </>
    )
}

export default Home;