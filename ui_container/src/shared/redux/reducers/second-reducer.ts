import { Types } from '../redux-types';

const initialState = {
    PROTOCOLS: [],
}

export default (state = initialState, action) => {

    switch (action.type) {

        case Types.PROTOCOLS:
            return { ...state, PROTOCOLS: action.payload }

        default:
            return state
    }
}