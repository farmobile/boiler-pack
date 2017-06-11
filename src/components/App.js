import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Header from "./Header";
import "../global.scss";
import styles from "./App.scss";
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";

const App = ({ history }) => {
    console.log("<App> render()");
    return (
        <BrowserRouter history={history}>
            <div className={`${styles.card} ${styles.container}`}>
                <Header center={true} />
                <nav>
                    <ul className={`${styles.nav}`}>
                        <li>
                            <NavLink
                                to="/"
                                exact
                                activeClassName={`${styles.active}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                activeClassName={`${styles.active}`}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/topics"
                                activeClassName={`${styles.active}`}
                            >
                                Topics
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <section className={`${styles.content}`}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                    </Switch>
                </section>
            </div>
        </BrowserRouter>
    );
};

export default App
