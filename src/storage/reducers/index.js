import { ADD_ARTICLE, LOGIN } from "../constants/action-types";

const initialState = {
    articles: [],
    logged: false
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === LOGIN) {
        return Object.assign({}, state, {
            logged: action.payload
        });
    }
    return state;
}

export default rootReducer;