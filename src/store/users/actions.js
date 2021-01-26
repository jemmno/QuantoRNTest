import * as types from './action-types';
import { getUsers } from '../../lib/api';

export const getUserList = () => ({
    type: types.REQUEST,
    payload: {}
});

export function requestUsers() {
    return (dispatch) => {
        dispatch({
            type: types.REQUEST,
        });
        getUsers()
            .then((response) => {
                let { data } = response;
                dispatch({ type: types.SUCESS, data });
            })
            .catch((err) => {
                dispatch({ type: types.FAILURE });
            });
    };
}