import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Service from "./Components/Service";
import Footer from "./Components/Footer";
import './Components/index.css'
import { Routes, Route, } from "react-router-dom";


const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/service" Component={Service} />
                <Route exact path="/contact" Component={Contact} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;