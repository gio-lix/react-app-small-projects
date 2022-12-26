import React from 'react';
import Details from "./components/Details";

function App() {
    return (
        <main className="container">
            <nav className="nav-links">
                <a href="#">Home</a> {">"} <a href="#">Laptop</a>
            </nav>
            <Details />
        </main>
    );
}

export default App;
