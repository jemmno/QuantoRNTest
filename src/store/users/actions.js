import * as types from './action-types';
import { getUsers } from '../../lib/api';

const GENERAL_ERROR = 'No se pudo cargar Usuarios';

export function requestUsers() {
    return (dispatch, getState) => {
        const { USERS } = getState()
        let pagination = USERS.pagination
        //Only do request when current page not yet total_pages
        if (pagination.page <= pagination.total_pages || pagination.total_pages === null) {
            dispatch({
                type: types.REQUEST,
            });
            if(!USERS.errorMessage) pagination.page++
            getUsers(pagination)
                .then((response) => {
                    let { data: { data: apiData, page, total_pages } } = response;
                    dispatch({
                        type: types.SUCESS,
                        payload: {
                            data: [...USERS.data, ...apiData],
                            pagination: { page, total_pages }
                        }
                    });
                })
                .catch((err) => {
                    dispatch({ type: types.FAILURE, payload: {message: GENERAL_ERROR} });
                });
        }
    };
}