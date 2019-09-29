import axios from 'axios';
import config from '../../config.js';

const apiUrl = 'http://' + config.currentEnvAPI();

const eventRoute = "events/";
const keysRoute = "keys/";
const projectsRoute = "project/";

const getUploadEvents = async ({commit}) => {
    const events = await axios.get(apiUrl + eventRoute);
    commit('addUploadEventsToStore', events.data);
};

const getVideoKeys = async ({commit}) => {
    const keys = await axios.get(apiUrl + keysRoute);
    commit('addVideoKeysToStore', keys.data);
};

const getProjects = async ({commit}) => {
    const projects = await axios.get(apiUrl + projectsRoute);
    commit('addProjectsToStore', projects.data);
};

export default {
    getUploadEvents,
    getVideoKeys,
    getProjects,
}