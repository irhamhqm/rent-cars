
import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(url) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then((response) => {
        setLoading(false);
        setResponse(response);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return { loading, response, error };
}
