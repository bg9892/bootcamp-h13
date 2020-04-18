import React, { Component } from "react";
import Table from '../Table';
import employees from "../../employees.json";


class Navbar extends Component {
  state = {
    title: ""
  };

  componentDidMount() {
    
  }

  handleChange = evt => {
    const value = evt.target.value;
    // return value;
    this.setState({ 
      title: value 
    });
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    // filter by title
    // return employees.filter(employee => employee.title === this.state.title);
  }


  render() {
    return (
      <div> 
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">Employee Directory</span>
        <form class="form-inline">
          <input onChange={this.handleChange} class="form-control mr-sm-2" type="search" placeholder="Filter By Title" aria-label="Search" />
          <button onClick={this.handleFormSubmit} class="btn btn-outline-success my-2 my-sm-0" type="submit">Filter</button>
        </form>
      </nav>
      <Table key={employees.id} employees={employees} title={this.state.title} handleFormSubmit={this.handleFormSubmit}/>
      </div>
      
    );
  }
}

export default Navbar;