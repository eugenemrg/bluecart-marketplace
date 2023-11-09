import React, { useState, useEffect } from "react";

function History() {
  const [history, setHistory]=useState([])
  useEffect(()=>{
    const token = localStorage.getItem('access_token')
    console.log(token)
    if(token){
      fetchHistory(token)
    }
  },[])

  const fetchHistory = (token) =>{
    fetch('https://bluecart-api.onrender.com/history',{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((res)=>res.json())
    .then((data)=>setHistory(data))

  }
  console.log(history)

  return (
    <div className="page">
      <div className="top_card">
        <h3>Recent Searches</h3>
      </div>
      <div className='table-box'>
          {history.map((item, index) => (
            <div key={index} className="table-row">
              <p>{item.name}</p>
            </div>
          ))}
      </div>

    </div>
  );
}

export default History;

