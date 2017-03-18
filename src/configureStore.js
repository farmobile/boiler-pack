import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import rootReducer from 'components/Reducers'


export default (history) => {

    let devtool = f => f;
    if(window && window.devToolsExtension) {
        devtool = window.devToolsExtension();
    }

    // Build the middleware for intercepting and dispatching navigation actions
    const middleware = routerMiddleware(history)

    // preload a saved state object (e.g. from local storage)
    const persistedState = undefined

    // create the store
    const store = createStore(
        rootReducer,
        persistedState,
        compose(applyMiddleware(middleware), devtool)
    )

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('components/Reducers', () => {
            store.replaceReducer(require('components/Reducers').default);
        });
    }

    return store
}
