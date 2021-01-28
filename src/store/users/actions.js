import * as types from './action-types';
import { getUserDetail, getUsers } from '../../lib/api';

const GENERAL_ERROR = 'No se pudo cargar Usuarios';
const DETAIL_ERROR = 'No se pudo recuperar datos de usuario';

export function requestUsers() {
    return (dispatch, getState) => {
        const { USERS } = getState()
        let pagination = USERS.LIST.pagination
        //Only do request when current page not yet total_pages
        if (pagination.page <= pagination.total_pages || pagination.total_pages === null) {
            dispatch({
                type: types.REQUEST_LIST,
            });
            if (!USERS.LIST.errorMessage) pagination.page++
            getUsers(pagination)
                .then((response) => {
                    let { data: { data: apiData, page, total_pages } } = response;
                    dispatch({
                        type: types.SUCESS_LIST,
                        payload: {
                            data: [...USERS.LIST.data, ...apiData],
                            pagination: { page, total_pages }
                        }
                    });
                })
                .catch((err) => {
                    dispatch({ type: types.FAILURE_LIST, payload: { message: GENERAL_ERROR } });
                });
        }
    };
}

export function requestUserDetail(userID) {
    return dispatch => {
        dispatch({
            type: types.REQUEST_DETAIL,
        });
        getUserDetail(userID)
            .then((response) => {
                let { data: { data: apiData } } = response;
                dispatch({
                    type: types.SUCESS_DETAIL,
                    payload: {
                        data: apiData
                    }
                });
            })
            .catch((err) => {
                dispatch({ type: types.FAILURE_DETAIL, payload: { message: DETAIL_ERROR } });
            });
    }
};

export function cleanUserDetail() {
    return dispatch => { dispatch({ type: types.CLEAN_DETAIL }) }
}