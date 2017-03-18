import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import App from 'components/App'


// select dom node to mount the app (defined in our index.template.ejs)
const rootEl = document.getElementById('root')
// Create the browser history object (will be passed to the router and the redux store)
const history = createHistory()
// Build the redux store (will be passed into the <Provider>)
const store = configureStore(history)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const render = Component => {
    console.log('<index> render()')
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppContainer>
                    <Component />
                </AppContainer>
            </ConnectedRouter>
        </Provider>,
        rootEl
    )
}

render(App);

if (module.hot){
    module.hot.accept('components/App', () => render(App))
}
