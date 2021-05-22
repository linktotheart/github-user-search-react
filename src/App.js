import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar'
import User from "./components/pages/User"
import UserList from './components/UserList'
import axios from "axios"
import Search from './components/Search'
import { Alert } from './components/Alert'
import about from './components/pages/about'

function App(props) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, SetAlert] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_ID}`)
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })

  }, [])

  /// Set alert
  const showAlert = (msg, type) => {
    SetAlert({ msg: msg, type: type })
    setTimeout(() => SetAlert(null), 3000)
  }

  // SEARCH GITHUB USER API 
  const searchUser = async (text) => {
    console.log(text)
    axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_ID}`)
      .then(res => {
        setUsers(res.data.items);
        setLoading(false);
      })
  }

  const getUser = (username) => {
    axios
    .get(`https://api.github.com/user/${username}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_ID}`)
    .then(res => {
      setUser(res.data);
      setLoading(false);
    })
  }

  return (
    <main>

      <Router>
        <Navbar title="Github Finder" icon="fab fa mr-1 fa-github" >
          <Search search={searchUser} alert={showAlert} />
        </Navbar>

        <Switch>
          
          <Route exact path="/" render={props => (
              <div className="container pt-5">
                <Alert alert={alert} />
                <UserList users={users} loading={loading} />
              </div>
          )} />
          <Route exact to="user:username" render={props => (
            <User {...props} fetchUser={() => getUser} user={user} loading={loading} />
          )} />
            
          
          <Route  path="/about" component={about}  />
        </Switch>

      </Router>

    </main>
  );
}

export default App;
