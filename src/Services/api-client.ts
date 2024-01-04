import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '268c698d7ae9429b9410a09705d30980'
    }
})