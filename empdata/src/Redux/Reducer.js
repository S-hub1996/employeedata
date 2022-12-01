import * as types from './ActionType';



const initState={
    employees:[],
    isLoading:false,
    isError:false
}

const reducer= (oldState= initState,action)=>{
const {type,payload}=action;
switch(type){
    case types.GET_EMPLOYEE_REQUEST:
        return {
            ...oldState,
            isLoading:true,
            isError:false,
        }
    case types.GET_EMPLOYEE_SUCCESS:
        return {
            ...oldState,
            employees:payload,
            isLoading:false,
            isError:false,
        }
    case types.GET_EMPLOYEE_FAILURE:
        return {
            ...oldState,
            isLoading:false,
            isError:true,
        }
    default:return oldState;
}
}

export {reducer}