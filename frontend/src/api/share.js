import axios from 'axios';

export const shareQuestion = async (email, content_url) => {
    const url = `https://private-anon-3d6a6f3818-blissrecruitmentapi.apiary-mock.com/share?destination_email=${email}&content_url=${content_url}`

    return axios.post(url).then(
        res => res.data
    ).catch(
        err => console.log(err)
    )
}