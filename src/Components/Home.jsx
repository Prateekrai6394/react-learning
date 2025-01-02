import React from "react";
import img from "../Images/react2 img.jpg.svg"
import Common from "./Common";

const Home = () => {
    return(
        <>
        <Common  name= 'Full Stack Web Developer' imgsrc= {img} visit= '/service' btname="Get Started" />
        </>
    )
}

export default Home;

