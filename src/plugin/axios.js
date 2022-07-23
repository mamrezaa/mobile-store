import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.10.166:5002/',
    headers: {"e-access-key": "bb08ce808b5d46e48816cd1f3ce88e88"},
});

// instance.interceptors.response.use((response) => {
//     return response
// },(error) => {
//     throw(error)
// })

export default instance

