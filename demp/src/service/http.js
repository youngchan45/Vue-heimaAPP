import axios from 'axios'
import api from './api'

let instance = axios.create({
    baseURL:'http://www.liulongbin.top:3005/api',
    timeout:1000,
})