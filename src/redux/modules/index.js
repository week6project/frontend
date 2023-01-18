export const serverUrl = process.env.REACT_APP_API_URL;
export const isDev = process.env.NODE_ENV === "development";

export const tokenLocal = localStorage.getItem('token');