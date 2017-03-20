import React from "react";

const Home = () => {
    console.log("<Home> render()");
    return (
        <div>
            <h1>Hello World!</h1>
            <p>
                This starter project contains examples of the following concepts:
            </p>
            <h4>Class-Based Components</h4>
            <h4>Stateless Functional Components</h4>
            <h4>CSS Modules</h4>
            <h4>Declarative Routing (react-router v4)</h4>
            <h4>Lazy-Loaded Bundle Splitting</h4>
            <p>coming soon...</p>
        </div>
    );
};

export default Home
