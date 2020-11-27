import axios from 'axios';
import { useState, useEffect } from 'react';

// this custom hook takes arg - api url
const useFetch = url => {
  // initial state
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({}); // request body object

  // root url
  const baseUrl = 'http://localhost:5000';

  // func to make api request with request body object as an argument
  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    // validating in useEffect every time if we are loading or not
    // we want to make post request on calling doFetch func & setIsLoading to true
    // This validation is preventing on making auto post request on initial render
    if (!isLoading) {
      // Validating the value when useEffect gets render second time
      return; // exit the func
    }

    const auth = async () => {
      try {
        // options - passing request body object in api request from our useFetch hook state
        const { data } = await axios(baseUrl + url, options);
        setResponse(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    auth();
  }, [isLoading, url, options]);

  // returning object & function
  return [{ isLoading, response, error }, doFetch];
};

export default useFetch;
