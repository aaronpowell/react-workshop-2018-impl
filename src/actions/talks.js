import { fetchAgenda } from '../agenda';

export const FETCH_TALKS = 'FETCH_TALKS';

export const fetchTalks = dispatch => () => dispatch({
    type: FETCH_TALKS,
    payload: fetchAgenda()
});