'use client'
import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      if (response.status===200){
        setData(response.data)
        setIsLoading(false)
      };
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};
