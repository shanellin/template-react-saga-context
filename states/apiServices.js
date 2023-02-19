import axios from "axios"
import getConfig from "next/config"
import { tokenKey } from "@constants"

const runtimeConfig = getConfig()
const config = runtimeConfig?.publicRuntimeConfig || {}
const apiBaseUrl = config.apiBaseUrl
const isBrowser = process.browser

axios.interceptors.request.use(
  (configs) => {
    let spcsToken = localStorage.getItem(tokenKey)
    if (spcsToken && isBrowser) {
      configs.headers.Authorization = `Bearer ${spcsToken}`
    }
    configs.headers["x-request-id"] = "requestID"
    return configs
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (isBrowser && error && error.response) {
      let isInvalidUser = false
      if (error.response.status === 403) {
        isInvalidUser = true
      }
    }

    return Promise.reject(error)
  }
)

function load(endpoint, params) {
  return axios.get(`${apiBaseUrl}/${endpoint}`, { params })
}

function loadCustomHead(endpoint, headers, params) {
  return axios.get(`${apiBaseUrl}/${endpoint}`, { params, headers })
}

function create(endpoint, data, params) {
  return axios.post(`${apiBaseUrl}/${endpoint}`, data, { params })
}

function update(endpoint, data, params) {
  return axios.put(`${apiBaseUrl}/${endpoint}`, data, { params })
}

function upload(endpoint, file, onUploadProgress, params, cancelToken) {
  return axios.post(`${apiBaseUrl}/${endpoint}`, file, {
    onUploadProgress,
    headers: {
      "Content-Type": file.type,
      Accept: "*/*"
    },
    params,
    cancelToken
  })
}

function delele(endpoint, data) {
  return axios.delete(`${apiBaseUrl}/${endpoint}`, { data })
}

export default {
  apiBaseUrl,
  load,
  loadCustomHead,
  create,
  update,
  upload,
  delele
}
