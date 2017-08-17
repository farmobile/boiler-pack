import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../global.scss";
import styles from "./App.scss";
import Home from "./Home";

const App = ({ history }) => {
    return (
        <BrowserRouter history={history}>
            <div className={`${styles.card} ${styles.app}`}>
                <Route exact path="/" component={Home} />
            </div>
        </BrowserRouter>
    );
};

export default App
