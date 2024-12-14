import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import React from 'react';

const server: AxiosRequestConfig = {
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 1000,
  headers: {
    "Accept": "*/*, application/json, text/plain",
    "Content-Type": "application/json",
  }
}


function serverApi() {
  const api: AxiosInstance = axios.create(server);
  return api
}

export const laravelApi = serverApi();