import { Types } from '../redux-types';

const initialState = {
    USER: null,
    CONDITIONS: [],
    // PROTOCOLS: [],
    CONDITION_INFO: []
}

export default (state = initialState, action) => {

    switch (action.type) {

        case Types.USER_OBJ:
            return { ...state, USER: { name: action.payload.name, email: action.payload.email } }

        case Types.CONDITIONS:
            return { ...state, CONDITIONS: action.payload }

        // case Types.PROTOCOLS:
        //     return { ...state, PROTOCOLS: action.payload }

        case Types.CONDITION_INFO:
            return { ...state, CONDITION_INFO: action.payload }

        default:
            return state
    }
}