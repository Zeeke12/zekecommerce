import React, { createContext, useContext, useEffect, useState } from 'react';

const ApiDataContext = createContext();

export function useApiData() {
  return useContext(ApiDataContext);
}

export function ApiDataProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchQuery}&page=1&country=US&category_id=aps`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '918279539emshc5cb97ccad6aeb2p14a080jsn3674f5240d51',
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonResult = await response.json();
        setData(jsonResult);
        setIsLoading(false);
      } catch (fetchError) {
        setError(fetchError);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const [searchQuery, setSearchQuery] = useState('')
  
  const search = (e) =>{
    const query = e.target.value;

    

  setSearchQuery(query);
  console.log(query)
  localStorage.setItem('result', JSON.stringify(query));

  }


  const contextValue = {
    data, search, 
    isLoading,
    error,
  };

  return (
    <ApiDataContext.Provider value={contextValue}>
      {children}
    </ApiDataContext.Provider>
  );
}
