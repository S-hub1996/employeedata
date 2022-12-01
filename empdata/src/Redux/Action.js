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
const addEmployeesRequest = () => {
    return {
        type: types.ADD_EMPLOYEE_REQUEST
    }
}
const addEmployeesSuccess = (r) => {
    return {
        type: types.ADD_EMPLOYEE_SUCCESS,
        payload: r.data
    }
}
const addEmployeesFailure = (e) => {
    return {
        type: types.ADD_EMPLOYEE_FAILURE,
        payload:e
    }
}
const addEmployees = (payload) => (dispatch) => {
    dispatch(addEmployeesRequest())
    return axios.post("https://json-server-bc3l.onrender.com/data",payload).then((r) => {
        console.log(r)
        return dispatch(addEmployeesSuccess(r))
    }).catch((e) => {
        return dispatch(addEmployeesFailure(e))
    })
}

const updateEmployeesRequest = () => {
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
const updateEmployeesFailure = (e) => {
    return {
        type: types.UPDATE_EMPLOYEE_FAILURE,
        payload:e
    }
}

const updateMusicRecord = (id,payload) => (dispatch) => {
    dispatch(updateEmployeesRequest())
    return axios.patch(`http://localhost:8080/albums/${id}`,payload).then((r) => {
        return dispatch(updateEmployeesuccess(r))
    }).catch((e) => {
        return dispatch(updateEmployeesFailure(e))
    })
}

export { getEmployees, updateMusicRecord,addEmployees}