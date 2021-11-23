import axios from 'axios'

export default function apiHelper(isAuth = false) {
  let headers = {
    Accept: 'application/json'
  }

  if(isAuth) {
    headers['Authorization'] = "Bearer 154|4jLJeoGDOjHbglmRtWpRlGCReykooUNVFrUN5BUz"
  }

  const apiInstance = axios.create({
    headers: headers
  })

  return apiInstance
}