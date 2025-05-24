import moment from "moment";
import axiosClient from "@/lib/config/axios-client";
import { toast } from "react-toastify";

export const apiRequest = async (method, url, data = {}) => {
  try {
    const response = await axiosClient({
      method,
      url,
      data,
    });
    console.log("response=========success", response);
    return response;
  } catch (error) {
    console.log("response=========error", {
      method,
      url,
      data,
      error: error.toJSON ? error.toJSON() : error,
    });
    throw error;
  }
};

// handleApiResponse
export const handleApiResponse = (response) => {
  if (response && response.status) {
    const message = response.data?.message || "Operation successful";

    switch (response.status) {
      case 200: // OK
        toast.success(message || "Request succeeded");
        break;
      case 201: // Created
        toast.success(message || "Resource created successfully");
        break;
      case 202: // Accepted
        toast.info(message || "Request accepted for processing");
        break;
      case 203: // Non-Authoritative Information
        toast.info(message || "Non-authoritative information received");
        break;
      case 204: // No Content
        toast.info("No content to display");
        break;
      case 205: // Reset Content
        toast.info("Please reset the view");
        break;
      case 206: // Partial Content
        toast.info("Partial content received");
        break;
      case 207: // Multi-Status (WebDAV)
        toast.info("Multiple statuses returned");
        break;
      case 208: // Already Reported (WebDAV)
        toast.info("Already reported");
        break;
      case 226: // IM Used (HTTP Delta encoding)
        toast.info("Instance manipulation used");
        break;
      default:
        toast.info(message || "Operation completed successfully");
    }
  } else {
    toast.info("Unexpected response format");
  }
};

// handleApiError
export const handleApiError = (error) => {
  console.error("API Error:", error);

  if (error.response) {
    const status = error.response.status;
    const message = error.response.data?.detail || error.message;

    switch (status) {
      case 400:
        toast.error("Bad Request: " + message);
        break;
      case 401:
        toast.error("Unauthorized: " + message);
        break;
      case 403:
        toast.error("Forbidden: " + message);
        break;
      case 404:
        toast.error("Not Found: " + message);
        break;
      case 409:
        toast.error("Conflict: " + message);
        break;
      case 422:
        toast.error("Unprocessable Entity: " + message);
        break;
      case 429:
        toast.error("Too Many Requests: Please slow down.");
        break;
      case 500:
        toast.error("Server Error: " + message);
        break;
      case 502:
        toast.error("Bad Gateway: " + message);
        break;
      case 503:
        toast.error("Service Unavailable: " + message);
        break;
      case 504:
        toast.error("Gateway Timeout: " + message);
        break;
      default:
        toast.error(message || "An unexpected error occurred");
    }
  } else if (error.request) {
    toast.error("No response from server. Please try again later.");
  } else {
    toast.error("Error: " + error.message);
  }
};

export const displayValue = (value, options = {}) => {
  const {
    defaultValue = "N/A",
    dateFormat = "DD MMM YYYY",
    isDate = false,
  } = options;

  // Handle null/undefined/empty values
  if (value === null || value === undefined || value === "") {
    return defaultValue;
  }

  // Handle date values
  if (
    isDate ||
    moment.isDate(value) ||
    moment(value, moment.ISO_8601, true).isValid()
  ) {
    const date = moment(value);
    if (!date.isValid()) {
      return defaultValue;
    }
    return date.format(dateFormat);
  }

  // Handle boolean values
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  // Handle numbers
  if (typeof value === "number") {
    return value.toString();
  }

  // Handle arrays
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(", ") : defaultValue;
  }

  // Handle objects
  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  // Return string values as is, but truncate if too long
  const returnValue = value?.toString();
  if (returnValue?.length > 30) {
    return returnValue?.slice(0, 30) + "...";
  }
  return returnValue;
};

// Remove null,empty and undefined values
export const cleanerFunc = (obj) => {
  if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
    const newObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = cleanerFunc(obj[key]);
        if (
          value !== "" &&
          value !== null &&
          value !== undefined &&
          (typeof value !== "object" || Object.keys(value).length > 0)
        ) {
          newObj[key] = value;
        }
      }
    }
    return newObj;
  }
  return obj;
};
