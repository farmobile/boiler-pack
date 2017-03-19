import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import styles from './Form.scss'


class About extends Component {

    randomizeData(){
        const num = Math.floor(Math.random()*9)
        const num2 = Math.floor(Math.random()*9)
        const titles = ['Howdy', 'Hola!', 'Heya', 'Yo', 'Hey Dude', ':)', 'Flim Flam', 'Hello World', 'Wazzzuuuppp'];
        const texts = ['I wish I was little bit taller. I wish I was a baller. I wish I had a girl who looked good I would call her. I wish I had a rabbit in a hat with a bat, and a \'64 Impala', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'A singer in a smokey room...The smell of wine and cheap perfume', 'Testing testing testing testing testing testing', 'The quick brown fox jumps over the lazy dog.', 'I\'m just a bill. Yes, I\'m only a bill. And I\'m sitting here on Capitol Hill.', 'Call me Ishmael. Some years ago - never mind how long precisely...', 'Cras et risus efficitur, iaculis lorem tincidunt, ultrices lectus.', '(ツ) (ツ) (ツ) (ツ) (ツ)'];
        this.props.dispatch({
            type:'CHANGE_PAGE_DATA',
            payload: {
                title: titles[num],
                text: texts[num2]
            }
        })
    }

    render(){
        console.log('<About> render()')
        const { match, location } = this.props
        const { title, text } = this.props.data

        return (
            <div>
                <Route exact path={`${match.path}`} render={() => (
                    <div>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        <p><Link to={`${match.path}/edit`}>Edit</Link></p>
                    </div>
                )}/>
                <Route exact path={`${match.path}/edit`} render={() => (
                    <div>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        <p><Link to={`${match.path}`}>Cancel</Link></p>
                    </div>
                )}/>
            </div>
        )

    }
}


export default connect((state) => ({
    data: state.basic
}))(About)
