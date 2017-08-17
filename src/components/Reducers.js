import { combineReducers } from "redux";

const INITIAL_STATE = { }

const BasicReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ACTION_NAME":
            return {
                ...state,
                do: 'something'
            };
        default:
            return state;
    }
};

export default combineReducers({
    basic: BasicReducer,
});
