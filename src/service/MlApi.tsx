import axios from 'axios';

export default function MlApi() {
    return axios.create({
        baseURL: 'https://api.mercadolibre.com'
    })
}
