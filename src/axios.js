import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/v1/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	body: JSON.stringify({}) ,
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
		'Accept': 'application/json',
	},
});

export default axiosInstance;