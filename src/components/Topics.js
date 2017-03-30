import React from "react";
import { Route, Link } from "react-router-dom";

const Topic = ({ location }) => {
    console.log("<Topic> render()", location);
    return (
        <div>
            <h3>{location.state.title}</h3>
            <div><a href={location.state.url}>{location.state.url}</a></div>
        </div>
    );
};

const Topics = ({ match }) => {
    console.log("<Topics> render()");
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={{
                        pathname: `${match.url}/lifecycle`,
                        state: {
                            title: 'React Lifecyle Methods',
                            url: 'https://facebook.github.io/react/docs/react-component.html'
                        }
                    }}>
                        React Lifecyle Methods
                    </Link>
                </li>
                <li>
                    <Link to={{
                        pathname: `${match.url}/redux`,
                        state: {
                            title: 'Learn Redux',
                            url: 'http://learnredux.com'
                        }
                    }}>
                        Learn Redux
                    </Link>
                </li>
                <li>
                    <Link to={{
                        pathname: `${match.url}/webpack`,
                        state: {
                            title: 'Webpack2 Docs',
                            url: 'https://webpack.js.org/guides/get-started/'
                        }
                    }}>
                        Webpack2 Docs
                    </Link>
                </li>
                <li>
                    <Link to={{
                        pathname: `${match.url}/router`,
                        state: {
                            title: 'React Router Docs',
                            url: 'https://reacttraining.com/react-router/web/guides/quick-start'
                        }
                    }}>
                        React Router Docs
                    </Link>
                </li>
            </ul>
            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.url}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
};

export default Topics
