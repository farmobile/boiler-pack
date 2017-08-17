import React from "react"
import Map from "./Map"
import styles from "./App.scss"


const Home = () => {
    console.log("<Home> render()")
    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={styles.padded}>Controls</div>
            </aside>
            <section className={styles.main}>
                <Map />
            </section>
        </div>
    )
}

export default Home
