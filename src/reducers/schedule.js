export const addToScheduleReducer = (prevState, talk) => {
    if (prevState.schedule.indexOf(talk) === -1) {
        return {
            ...prevState,
            schedule: [...prevState.schedule, talk]
        };
    } else {
        return prevState;
    }
};

export const removeFromScheduleReducer = (prevState, talk) => {
    const schedule = prevState.schedule;
    const index = schedule.indexOf(talk);
    if (index !== -1) {
        return {
            ...prevState,
            schedule: schedule.slice(0, index).concat(schedule.slice(index + 1, schedule.length))
        };
    } else {
        return prevState
    }
}