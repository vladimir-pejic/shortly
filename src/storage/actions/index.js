import { ADD_ARTICLE, LOGIN } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function login(payload) {
    return { type: LOGIN, payload }
};