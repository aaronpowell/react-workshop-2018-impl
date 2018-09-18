export const ADD_TO_SCHEDULE = 'ADD_TO_SCHEDULE';
export const REMOVE_FROM_SCHEDULE = 'REMOVE_FROM_SCHEDULE';

export const addToSchedule = (talk) => {
    return {
        type: ADD_TO_SCHEDULE,
        payload: talk
    };
};

export const removeFromSchedule = (talk) => {
    return {
        type: REMOVE_FROM_SCHEDULE,
        payload: talk
    };
};