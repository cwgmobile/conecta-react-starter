import axios from 'axios'

/** Configure VITE_API_BASE_URL em .env.local para apontar para o backend real. */
export const apiClient = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL || '/api', timeout: 10000 })
