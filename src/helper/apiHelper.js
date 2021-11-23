import axios from 'axios'

export default function apiHelper() {
  const apiInstance = axios.create({
    headers: {
      Accept: 'application/json'
    }
  })

  return apiInstance
}