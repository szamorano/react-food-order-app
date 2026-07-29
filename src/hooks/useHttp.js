import { useState } from "react";

// for sending general requests
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request.",
    );
  }

  return resData;
}

export default function useHttp() {
  // for updating some state based on the request status - like error or loading states
  const [data, setData] = useState(); // <--- success case
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  async function sendRequest() {
    setIsLoading(true);
    try {
      const resData = sendHttpRequest();
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  }

  return {
    data,
    isLoading,
    error,
  };
}
