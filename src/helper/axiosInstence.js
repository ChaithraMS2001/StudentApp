import axios from "axios"
let axiosInstance = axios.create({
    baseURL : "http://localhost:3030/"
})

export default axiosInstance;