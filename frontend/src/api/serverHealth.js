import axios from 'axios';

export const checkHeathStatus = () => axios.get(`https://private-anon-3d6a6f3818-blissrecruitmentapi.apiary-mock.com/health`).then(
    res => {
        if(res.status === 'OK') return 'OK'
        return 'notok'
    }
).catch(
    err => err
)