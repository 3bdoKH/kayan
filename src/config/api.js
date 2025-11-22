// API Configuration
const API_BASE_URL = "https://winchelmohandes-furniture.online/api";

// Default fetch options for API calls
export const getFetchOptions = (method = "GET", body = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    mode: "cors",
    credentials: "omit",
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return options;
};

// Fetch with timeout
export const fetchWithTimeout = async (url, options = {}, timeout = 10000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

// Handle fetch errors
export const handleFetchError = (error) => {
  if (error.name === "AbortError") {
    return "انتهت مهلة الاتصال. يرجى المحاولة مرة أخرى.";
  } else if (
    error.message.includes("Failed to fetch") ||
    error.message.includes("NetworkError")
  ) {
    return "فشل الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت أو إعدادات CORS.";
  } else {
    return error.message || "حدث خطأ غير متوقع";
  }
};

export default API_BASE_URL;
