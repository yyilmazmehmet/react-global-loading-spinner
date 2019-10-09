import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import http from './util/axios';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/'
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    http.get(url + 'users').then(response => {
      setUsers(response.data);
    }).then(() => {
      http.get(url + 'comments').then(response => {
       
        setComments(response.data);
      })
    }).then(()=>{
      http.get(url+'posts').then(response =>{
        setPosts(response.data);
      })
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Posts length  {posts.length}
        </p>
        <p>
         Users length  {users.length}
        </p>
        <p>
         Comments length  {comments.length}
        </p>
        
      </header>
    </div>
  );
}

export default App;
