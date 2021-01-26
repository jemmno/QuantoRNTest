import * as types from './action-types';

const initialState = {
    data: [],
    loading: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.SUCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case types.FAILURE:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
};