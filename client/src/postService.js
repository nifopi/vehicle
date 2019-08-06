const axios = require('axios');
const url = 'http://vehicle-com.umbler.net/'

class PostService {
    static vehicle = []
    // função para usar api post
    static post(date) {
        return axios.post(url, date).then((response) => {
            return response.data
        })
    }
    // função para usar api get
    static get(table) {
        return axios.get(`${url}${table}`).then((response) => {
            this.vehicle = response.data
            return response.data
        })
    }
    // função para usar api put
    static put(table, id,date) {
        return axios.put(`${url}${table},${id}`,date).then((response) => {
            this.vehicle = response.data
            return response.data
        })
    }
    // função para usar api delete
    static delete(table, id) {
        return axios.delete(`${url}${table},${id}`).then((response) => {
            return response.data
        })
    }
}
export default PostService;