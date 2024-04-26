import React from "react";
import img from "../Images/hero-img.619f0cc8.png"
import Common from "./Common"

const About = () => {
    return(
        <>
        <Common name= 'Welcome to About page' imgsrc= {img} visit= '/contact' btname="Contact Now" />
        </>
    )
}

export default About;