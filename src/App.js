import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from './Header'
import styles from './App.scss'

export default () => (
    <div className={`${styles.card} ${styles.container}`}>
        <Header center={true} />
        <h1 className={styles.headline}>Hello World</h1>
    </div>
)
