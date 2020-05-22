import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID FcBjc721F9U4ZjCTqtRxMwPJ_Z7nE8HzLcRKyuTX6mo',
  },
})
