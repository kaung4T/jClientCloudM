import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import React from 'react';

const server: AxiosRequestConfig = {
  baseURL: "https://one.foodlifesavers.com/api",
  timeout: 1000,
  headers: {
    "Accept": "*/*, application/json, text/plain",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.AUTH_TOKEN}`
  }
}


function serverApi() {
  const api: AxiosInstance = axios.create(server);
  return api
}

export const laravelApi = serverApi();