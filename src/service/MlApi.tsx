import axios from 'axios';

export default function MlApi(query: string) {
    return axios.create({
        baseURL: "https://api.mercadolibre.com", params: {
            q: query
        }, responseType: "json"
    });
}
