//@ts-check
import React, { Component } from "react";
import Hero from "./Hero";
import Features from "./Features";

class MainView extends Component {

    render() {
        return (
            <div>
            <Hero />
            <Features />
            </div>

        );
    }
}

export default MainView;
