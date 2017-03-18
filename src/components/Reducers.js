import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


const BasicReducer = (state = {title: 'About', text: 'This is the default text from our redux store.'}, action) => {
    switch(action.type){
        case 'CHANGE_PAGE_DATA':
            return {...state, title: action.payload.title, text: action.payload.text}
        default:
            return state
    }
}


const DynamicReducer = (state = {}, action) => {
    const { type } = action

    const handlers = {
        'TOGGLE' (state, { payload }) {
            return state
        }
    }

    if (type in handlers) {
        return handlers[type](state, action)
    }

    return state
}


export default combineReducers({
    router: routerReducer,
    basic: BasicReducer,
    dynamic: DynamicReducer
})
