import { combineReducers } from "redux";

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

export default combineReducers({
    basic: BasicReducer,
});
