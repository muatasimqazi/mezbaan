//@ts-check
import React, { Component } from "react";
import Hero from "./Hero";
import Features from "./Features";
import ExplainView from './Explain';
import Gigs from "./Gigs";

class MainView extends Component {

    render() {
        return (
            <div>
            <Hero />
            <Features />
            <ExplainView/>
            <Gigs />
            </div>

        );
    }
}

export default MainView;
