import axios from "axios";
import { baseURL } from "@/constants/urls";
import useGlobalLoader from "@/store/useGlobalLoader";

const IncCount = useGlobalLoader.getState().increaseCounter;
const decCount = useGlobalLoader.getState().decreaseCounter;
const counter = useGlobalLoader.getState().counter;

const apiClient = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
    "ngrok-skip-browser-warning": "true",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    !(config.headers.loader === false) && IncCount();
    console.log(counter, "counter value");
    return config;
  },
  (error) => {
    !(error.config.headers.loader === false) && decCount();
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    !(response.config.headers.loader === false) && decCount();
    return response;
  },
  (error) => {
    !(error.config.headers.loader === false) && decCount();

    const errorResponse = {
      message: "An error occurred",
      status: error.response?.status,
      data: error.response?.data,
    };

    if (error.response) {
      switch (error.response.status) {
        case 401:
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
          errorResponse.message = "Unauthorized. Please login again.";
          break;
        case 403:
          errorResponse.message = "Access forbidden.";
          break;
        case 404:
          errorResponse.message = "Resource not found.";
          break;
        case 500:
          errorResponse.message = "Server error. Please try again later.";
          break;
        default:
          errorResponse.message =
            error.response.data?.message || "An error occurred";
      }
    } else if (error.request) {
      errorResponse.message = "Check your connection.";
    } else {
      errorResponse.message = error.message;
    }
    return Promise.reject(errorResponse);
  }
);

export const apiCall = async (method, url, options = {}) => {
  const { data, params, contentType, headers = {} } = options;

  const config = {
    method: method.toLowerCase(),
    url,
    data,
    params,
    headers: {
      ...headers,
      "Content-Type": contentType || "application/json",
    },
  };

  try {
    const response = await apiClient(config);
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      status: error.status,
      data: error.data,
    };
  }
};
