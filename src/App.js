import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from './Header'
import styles from './App.scss'

export default () => (
    <div className={`${styles.card} ${styles.container}`}>
        <Header center={true} />
        <h1 className={styles.title}>Hello World</h1>
        <p>This starter project contains examples of the following concepts:</p>
        <h4>Class-Based Components</h4>
        <h4>Stateless Functional Components</h4>
        <h4>CSS Modules</h4>
        <h4>Declarative Routing (react-router v4)</h4>
        <p>coming soon...</p>
        <h4>Lazy-Loaded Bundle Splitting</h4>
        <p>coming soon...</p>
    </div>
)
