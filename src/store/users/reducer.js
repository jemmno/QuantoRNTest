import * as types from './action-types';

const ITEMS_PER_PAGE = 6;
const initialState = {
    data: [],
    pagination: {
        page: 0, 
        per_page: ITEMS_PER_PAGE,
        total_pages: null
    },    
    loading: false,
    errorMessage: null,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case types.SUCESS:
            return {
                ...state,
                loading: false,
                ...action.payload
            };
        case types.FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.message
            };
        default:
            return state;
    }
};