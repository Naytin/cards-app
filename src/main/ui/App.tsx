import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import { HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import Loader from "./common/Loader/Loader";
import {useSelector} from "react-redux";
import {AppStoreType} from "../bll/store/store";
import ErrorMessage from "./common/MessageError/ErrorMessage";

function App() {
    const isFetching = useSelector<AppStoreType>(state => state.app.isFetching)
    const error = useSelector<AppStoreType, string | null>(state => state.app.error)



    return (
        <div className="App">
            <HashRouter>
                <Header/>
                {isFetching && <Loader/>}
                <Routes/>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </HashRouter>
        </div>
    );
}

export default App;
