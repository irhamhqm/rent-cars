
import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const response = await axios.get(url);
        setResponse(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    getData();
  }, [url]);

  return { loading, response, error };
}
