import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import styles from "./Form.scss";

class About extends Component {
    randomizeData() {
        const num = Math.floor(Math.random() * 9);
        const num2 = Math.floor(Math.random() * 9);
        const titles = [
            "Howdy",
            "Hola!",
            "Heya",
            "Yo",
            "Hey Dude",
            "You know what?",
            "Greetings",
            "Hello World",
            "Wazzzuuuppp"
        ];
        const texts = [
            "I wish I was little bit taller. I wish I was a baller. I wish I had a girl who looked good I would call her. I wish I had a rabbit in a hat with a bat, and a '64 Impala",
            "All lies and jest, still, a man hears what he wants to hear and disregards the rest.",
            "A singer in a smokey room...The smell of wine and cheap perfume",
            "Every new beginning comes from some other beginning's end.",
            "It's been a hard day's night, and I'd been working like a dog.",
            "I'm just a bill. Yes, I'm only a bill. And I'm sitting here on Capitol Hill.",
            "All you need is love, love. Love is all you need.",
            "I fell into a burning ring of fire, I went down down down and the flames went higher.",
            "When the moon is in the Seventh House, And Jupiter aligns with Mars. Then peace will guide the planets And love will steer the stars."
        ];
        this.props.dispatch({
            type: "CHANGE_PAGE_DATA",
            payload: { title: titles[num], text: texts[num2] }
        });
    }

    render() {
        console.log("<About> render()");
        const { match } = this.props;
        const { title, text } = this.props.data;

        return (
            <div>
                <Route
                    exact
                    path={`${match.path}`}
                    render={() => (
                        <div>
                            <h2 className={styles.title}>{title}</h2>
                            <p className={styles.text}>{text}</p>
                            <p>
                                <a onClick={this.randomizeData.bind(this)}>
                                    Randomize
                                </a>
                            </p>
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default connect(state => ({ data: state.basic }))(About);
