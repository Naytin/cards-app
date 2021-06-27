import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import { HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </div>
    );
}

export default App;
