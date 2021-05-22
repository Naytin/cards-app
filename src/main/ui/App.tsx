import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
    return (
        <div className="App">
            <h1>CARDS-APP</h1>
            <BrowserRouter>
                <Header/>
                <Routes/>
            </BrowserRouter>
        </div>
    );
}

export default App;
