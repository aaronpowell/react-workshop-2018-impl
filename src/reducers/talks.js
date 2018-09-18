export const fetchTalksLoading = (prevState) => {
    return {
        ...prevState,
        loaded: false
    };
};

export const fetchTalksLoaded = (prevState, agenda) => {
    return {
        ...prevState,
        loaded: true,
        agenda
    };
};