import { useEffect, useState } from "react";

const useFetch = (url) => {
// create a custom hook that takes in a uri and returns the data, error and loading state

  const [data, setData] = useState(null); // will store the data we get from the api
  const [error, setError] = useState(null); // will store the error if there is any
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
        // while fetching the data, set loading to true
      try {
        const response = await fetch(url); // fetch the data from the uri
        const json = await response.json(); // convert the response to json

        setData(json); // set the data state to the json response we got
        setLoading(false); // set loading state to false since the data has been fetched
      } catch (error) {
        setError(error); // if there is an error, set the error state
        setLoading(false); // set loading to false since we are no longer fetching
      }
    }

    fetchData();
  }, [url])

  return { loading, error, data }; // return the data, error and loading state 
};

export default useFetch;
