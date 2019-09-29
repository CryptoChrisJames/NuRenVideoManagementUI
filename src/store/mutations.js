const addUploadEventsToStore = (state, events) => {
    state.events = events;
};

const addVideoKeysToStore = (state, keys) => {
    state.keys = keys;
};

const addProjectsToStore = (state, projects) => {
    state.projects = projects;
};

export default {
    addUploadEventsToStore,
    addVideoKeysToStore,
    addProjectsToStore,
};