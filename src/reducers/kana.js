import { SET_KANA, LOADING_KANA } from '../actions/types';
const initialState = {
    kana: null,
    loading: true,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOADING_KANA:
            return {
                ...state,
                loading: true,
            };
        case SET_KANA:
            return {
                ...state,
                kana: payload,
                loading: false,
            };
        default:
            return state;
    }
}
