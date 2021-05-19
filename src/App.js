import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import UserList from './components/UserList'
import axios from "axios"
import Search from './components/Search'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_ID}`)
    .then(res =>{
      setUsers(res.data);
      setLoading(false);
    })
    
  },[])


  // SEARCH GITHUB USER API 
  const searchUser = async (text) => {
    console.log(text)
    axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_ID}`)
    .then(res =>{
      setUsers(res.data.items);
      setLoading(false);
    })

  }

  return (
    <main>
      <Navbar title="Github Finder" icon="fab fa mr-1 fa-github" >
        <Search search={searchUser} />
      </Navbar>
      <div className="container pt-5">
          <UserList users={users} loading={loading} />
      </div>

    </main>
  );
}

export default App;
