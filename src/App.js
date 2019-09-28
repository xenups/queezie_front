import React, { Component } from 'react'
import About from './components/about'
import Contacts from './components/contacts'
import logo from './logo.svg';
import axios from "axios";
import './App.css';
const API_URL = 'http://localhost:3000/';

class App extends Component {
  state = {
    users: []
    
  }

  componentDidMount() {
    const url = `${API_URL}/api/questions/`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
     })  }
  
  render() {
    return (
      <div className="container">
        <div className="col-xs-8">
        <h1>Questions Cards</h1>
        {this.state.users.map((user) => (
          <div className="card">
           <div className="card-body">
               <h5 className="card-title">{user.question_context}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              {user.userId}             
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    )
  }

}
export default App;
