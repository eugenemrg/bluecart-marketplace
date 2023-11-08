import React, { useState, useEffect } from "react";

function History({ isRegistered }) {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isRegistered) {
      fetchHistory();
    } else {
      setHistory([]);
      setIsLoading(false);
    }
  }, [isRegistered]);

  const fetchHistory = async () => {
    try {
      console.log('Fetching history...');
      const response = await fetchUserHistoryFromAPI('http://localhost:5173/history');
      console.log('Response:', response);

      if (response.ok) {
        const data = await response.json();
        console.log('Data:', data);
        setHistory(data);
        setErrorMessage(""); 
      } else {
        console.error(`Error fetching history: Status ${response.status}`);
        setErrorMessage('An error occurred while fetching history. Please try again later.');
      }
    } catch (error) {
      console.error('Error fetching history:', error);
      setErrorMessage('An error occurred while fetching history. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteEntry = (index) => {
    const updatedHistory = [...history];
    updatedHistory.splice(index, 1);
    setHistory(updatedHistory);
  };

  const filteredHistory = history.filter((item) =>
    item.searchItem.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page">
      <h2 className="layout">Recent Searches</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : isRegistered ? (
        <div>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <ul>
                {filteredHistory.map((item, index) => (
                  <li key={index}>
                    <div>
                      <span>{item.searchItem}</span>
                      <span>{item.date}</span>
                    </div>
                    <button onClick={() => deleteEntry(index)}>
                      <i className="fa fa-trash"></i> Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p className="line">You need to be registered to view your order</p>
      )}
    </div>
  );
}

export default History;

async function fetchUserHistoryFromAPI() {
  return fetch('http://localhost:5173/history');
}
