import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;
export const TOKEN_KEY = 'rv85_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t) => localStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

const client = axios.create({ baseURL: API });
client.interceptors.request.use((config) => {
  const t = getToken();
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

export const api = {
  loginUrl: () => `${API}/auth/discord/login`,
  me: () => client.get('/auth/me').then((r) => r.data),
  saveDraft: (kind, data) => client.post('/drafts', { kind, data }).then((r) => r.data),
  getDraft: (kind) => client.get(`/drafts/${kind}`).then((r) => r.data),
  submitCharacter: (data) => client.post('/submit/character', { data }).then((r) => r.data),
  submitBackground: (payload) => client.post('/submit/background', payload).then((r) => r.data),
};
