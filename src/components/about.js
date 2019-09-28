
import React, { Component } from 'react';
export default class About extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render() {
    return (  
      <h5>Hello babe, its About me</h5>
    );
  }
}