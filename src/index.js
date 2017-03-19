import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import App from 'components/App'

// Create the browser history object (will be passed to the router and the redux store)
export const history = createHistory()
// select dom node to mount the app (defined in our index.template.ejs)
const rootEl = document.getElementById('root')

// Build the redux store (will be passed into the <Provider>)
const store = configureStore(history)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const render = Component => {
    console.log('<index> render()')
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>                
                <Component history={history} />
            </Provider>
        </AppContainer>,
        rootEl
    )
}

render(App);

if (module.hot){
    module.hot.accept('components/App', () => render(App))
}
