import React, {useEffect} from 'react';
import './App.scss';
import Header from "./Header/Header";
import { HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../bll/store/store";
import ErrorMessage from "./common/MessageError/ErrorMessage";
import {initializeApp} from "../bll/reducers/appReducer";

function App() {
    const dispatch = useDispatch()
    const isInitialized = useSelector<AppStoreType>(state => state.app.isInitialized)
    const error = useSelector<AppStoreType, string | null>(state => state.app.error)

    useEffect(() => {
        if(!isInitialized) dispatch(initializeApp())
    }, [dispatch])

    // if app is not initialized yet show preloader
    // if (isInitialized) return <Loader/>
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Routes/>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </HashRouter>
        </div>
    );
}

export default App;
