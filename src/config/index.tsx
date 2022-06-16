export const url = {
  apiUrl: process.env.REACT_API_URL,
  baseUrl: process.env.REACT_APP_BASE_URL,
}

export const apiHeaders = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('app_token'),
  }
}