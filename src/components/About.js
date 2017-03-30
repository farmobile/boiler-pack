import React, { Component } from "react"
import { connect } from "react-redux"
import { Switch, Route, Link } from "react-router-dom"
import { Field, reduxForm } from 'redux-form'
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
            "Just a small town girl, livin' in a lonely world. She took the midnight train goin' anywhere.",
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

    submitFunction(values){
        return new Promise((resolve) => {
            // do any validation or data manipulation here
            this.props.dispatch({
                type: "CHANGE_PAGE_DATA",
                payload: { title: values.title, text: values.text }
            })
            // TODO: change back to display view after updating store
            resolve()
        })
    }

    render() {
        console.log("<About> render()");
        const { match } = this.props;
        const { title, text } = this.props.data;
        return (
            <Switch>
                <Route
                    exact path={`${match.path}`}
                    render={() => (
                        <div>
                            <h2 className={styles.title}>{title}</h2>
                            <p className={styles.text}>{text}</p>
                            <p>
                                <Link to={`${match.path}/edit`} style={{padding: '1rem'}}>Edit</Link>
                                <a onClick={this.randomizeData.bind(this)} style={{padding: '1rem'}}>
                                    Randomize
                                </a>
                            </p>
                        </div>
                    )}
                />
                <Route
                    exact
                    path={`${match.path}/edit`}
                    render={() => {
                        const { handleSubmit, submitting } = this.props
                        return (
                            <div>
                                <form onSubmit={handleSubmit(this.submitFunction.bind(this))}>
                                    <div>
                                        <div>
                                            <Field name="title" component="input" type="text" placeholder="Title" />
                                        </div>
                                        <div>
                                            <Field name="text" component="input" type="text" placeholder="Text" />
                                        </div>
                                        <div>
                                            <button type="submit" disabled={submitting}>Submit</button>
                                            <Link to={`${match.path}`}>Cancel</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                    }}
                />
            </Switch>
        );
    }
}
export default connect(state => ({
    data: state.basic,
    initialValues: state.basic
}))(reduxForm({
    form: 'edit',  // a unique identifier for this form
    enableReinitialize: true
})(About))
