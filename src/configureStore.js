import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "components/Reducers";

export default () => {
    let devtool = f => f;
    if (window && window.devToolsExtension) {
        devtool = window.devToolsExtension();
    }

    // preload a saved state object (e.g. from local storage)
    const persistedState = undefined;

    // create the store
    const store = createStore(
        rootReducer,
        persistedState,
        compose(applyMiddleware(
            /* add any middleware pkgs here */
        ), devtool)
    );

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept("components/Reducers", () => {
            store.replaceReducer(require("components/Reducers").default);
        });
    }

    return store;
};
