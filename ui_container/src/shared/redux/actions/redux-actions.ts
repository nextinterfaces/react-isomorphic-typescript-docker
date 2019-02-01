import { Types } from '../redux-types';
import Request from 'axios';
import { Globals } from "../../Globals";


export function getCondition(id) {
    return async function (dispatch, getState) {
        let { data } = await Request.get(`${Globals.GLOBAL_CONF.API_SERVER}/api/conditions/wiki/${id}`)
        dispatch({ type: Types.CONDITION_INFO, payload: data })
    }
}

export function getName(id) {
    return async function (dispatch, getState) {
        let randomNum = Math.floor((Math.random() * 100) + 1)
        randomNum = randomNum % 2 == 0 ? 1 : 2
        // console.log('(getName)', randomNum);
        let { data } = await getUserFromAPI(randomNum)
        dispatch({ type: Types.USER_OBJ, payload: data })
    }
}

function getUserFromAPI(id) {
    return Request.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

export function getConditions() {
    return async function (dispatch, getState) {
        let { data } = await Request.get(`${Globals.GLOBAL_CONF.API_SERVER}/api/conditions`)
        dispatch({ type: Types.CONDITIONS, payload: data })
    }
}

export function getProtocols() {
    return async function (dispatch, getState) {
        let { data } = await Request.get(`${Globals.GLOBAL_CONF.API_SERVER}/api/protocols`)
        dispatch({ type: Types.PROTOCOLS, payload: data })
    }
}