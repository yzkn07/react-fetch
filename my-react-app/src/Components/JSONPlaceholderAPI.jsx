import React, { useState, useRef } from 'react';
import axios from 'axios';

function JSONPlaceholderAPI() {
  const [number, setNumber] = useState('');
  const [data, setData] = useState(null);
  const resultRef = useRef();

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const fetchPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${number}`)
      .then(response => {
        setData(response.data);
        if (resultRef.current) {
          resultRef.current.style.color = 'blue'; // useRef ile CSS değiştirme
        }
      })
      .catch(error => {
        console.error('Error fetching the JSON Placeholder API data', error);
      });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter post number"
      />
      <button onClick={fetchPost}>Fetch Post</button>

      {data && (
        <div ref={resultRef} style={{ marginTop: '20px' }}>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default JSONPlaceholderAPI;
