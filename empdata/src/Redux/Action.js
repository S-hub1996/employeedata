import * as types from './ActionType';
import axios from 'axios'


const getEmployeesRequest = () => {
    return {
        type: types.GET_EMPLOYEE_REQUEST
    }
}
const getEmployeesSuccess = (r) => {
    return {
        type: types.GET_EMPLOYEE_SUCCESS,
        payload: r.data
    }
}
const getEmployeesFailure = (e) => {
    return {
        type: types.GET_EMPLOYEE_FAILURE,
        payload:e
    }
}
const getEmployees = () => (dispatch) => {
    dispatch(getEmployeesRequest())
    return axios.get("https://json-server-bc3l.onrender.com/data").then((r) => {
        console.log(r)
        return dispatch(getEmployeesSuccess(r))
    }).catch((e) => {
        return dispatch(getEmployeesFailure(e))
    })
}

const updateMusicRecordRequest = () => {
    return {
        type: types.UPDATE_EMPLOYEE_REQUEST
    }
}
const updateEmployeesuccess = (r) => {
    return {
        type: types.UPDATE_EMPLOYEE_SUCCESS,
        payload:r.data
    }
}
const updateMusicRecordFailure = (e) => {
    return {
        type: types.UPDATE_EMPLOYEE_FAILURE,
        payload:e
    }
}

const updateMusicRecord = (id,payload) => (dispatch) => {
    dispatch(updateMusicRecordRequest())
    return axios.patch(`http://localhost:8080/albums/${id}`,payload).then((r) => {
        return dispatch(updateEmployeesuccess(r))
    }).catch((e) => {
        return dispatch(updateMusicRecordFailure(e))
    })
}

export { getEmployees, updateMusicRecord}