import axios from 'axios';

export const getQuestions = async (limit='', offset='', filter='') => {
    const url = `https://private-anon-3d6a6f3818-blissrecruitmentapi.apiary-mock.com/questions?limit=${limit}&offset=${offset}&filter=${filter}`;
    return axios.get(url).then(
        res => res.data
    ).catch(err => [])
}

export const getQuestionDetails = async (questionID) => {
    const url = `https://private-anon-3d6a6f3818-blissrecruitmentapi.apiary-mock.com/questions/`
    return axios.get(url+questionID).then(
        res => res.data
    ).catch(err => ({}))
}

export const updateQuestionDetails = async (questionID, data) => {
    const url = `https://private-anon-3d6a6f3818-blissrecruitmentapi.apiary-mock.com/questions/`;
    return axios.put(url+questionID, {
        ...data
    }).then(
        res => res.data
    ).catch(err => ({}))
}