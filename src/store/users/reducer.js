import { combineReducers } from 'redux';
import * as types from './action-types';
import {LIST, DETAIL} from './constants';

const ITEMS_PER_PAGE = 6;
const listInitialState = {
    data: [],
    pagination: {
        page: 0,
        per_page: ITEMS_PER_PAGE,
        total_pages: null
    },
    loading: false,
    errorMessage: null,
};

const listReducer = (state = listInitialState, action = {}) => {
    switch (action.type) {
        case types.REQUEST_LIST:
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case types.SUCESS_LIST:
            return {
                ...state,
                loading: false,
                ...action.payload
            };
        case types.FAILURE_LIST:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.message
            };
        default:
            return state;
    }
};

const detailInitialState = {
    data: {},
    loading: false,
    errorMessage: null,
};

const detailReducer = (state = detailInitialState, action = {}) => {
    switch (action.type) {
        case types.REQUEST_DETAIL:
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case types.SUCESS_DETAIL:
            return {
                ...state,
                loading: false,
                ...action.payload
            };
        case types.FAILURE_DETAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.message
            };
        case types.CLEAN_DETAIL:
            return {
                ...detailInitialState
            }
        default:
            return state;
    }
};

export default combineReducers({
    [LIST]: listReducer,
    [DETAIL]: detailReducer,
});