import React from 'react';

import Home from "./pages/Home";
import Player from "./components/Player";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Episode from "./pages/episodes/[slug]";

function App() {

    return (
        <div className="wrapper">
            <main>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/episodes/:slug" element={<Episode/>}/>
                </Routes>
            </main>
            <Player/>
        </div>
    );
}

export default App;
