import React, { Component } from 'react'
import About from './components/about'
import Questions from './components/questions'
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
      <Questions questions={this.state.users} />

    )
  }

}
export default App;
