import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://naytin-cards-app.herokuapp.com/2.0/',
    withCredentials: true
})




