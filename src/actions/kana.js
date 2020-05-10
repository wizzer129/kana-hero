import { SET_KANA, LOADING_KANA } from './types';
import kana from '../data/kana';

export const setKana = () => (dispatch) => {
    console.log('settings kana');
    dispatch({
        type: SET_KANA,
        payload: kana,
    });
};

export const loadingKana = () => (dispatch) => {
    dispatch({
        type: LOADING_KANA,
    });
};
