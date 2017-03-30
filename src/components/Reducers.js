import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux"
import { reducer as rootReducer } from 'redux-form'

const INITIAL_STATE = { title: "About", text: "Default text from the Redux store." }

const BasicReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGE_PAGE_DATA":
            return {
                ...state,
                title: action.payload.title,
                text: action.payload.text
            };
        default:
            return state;
    }
};

const DynamicReducer = (state = {value: null}, action) => {
    const { type } = action;

    const handlers = {
        'UPDATE' (state, { payload }) {
            return {...state, value: payload};
        }
    };

    if (type in handlers) {
        return handlers[type](state, action);
    }

    return state;
};

export default combineReducers({
    router: routerReducer,
    form: rootReducer,
    basic: BasicReducer,
    dynamic: DynamicReducer
});
