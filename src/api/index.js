import axios from 'axios';

export const BASE_URL = 'http://localhost:5041/';

export const ENDPOINTS = {
    participants: 'participant',
    questions: 'question',
    getAnswers: 'questions/getanswer',
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id),
    }
}