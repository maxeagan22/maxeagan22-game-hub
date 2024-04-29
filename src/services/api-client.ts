import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'df9caa0cb5a34b1fb386572e57c4f86b'
    }
})