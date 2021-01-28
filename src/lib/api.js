import axios from 'axios';
const ROOT_URL = 'https://reqres.in/api';
const config = {
  baseURL: ROOT_URL,
};
const axiosInstance = axios.create(config);

export function getUsers(pagination) {
    return axiosInstance.get(`/users?page=${pagination.page}&per_page=${pagination.per_page}`)
}

export function getUserDetail(userID) {
  return axiosInstance.get(`/users/${userID}`)
}