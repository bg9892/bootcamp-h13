import React, { Component } from "react";
import Table from '../Table';
import employees from "../../employees.json";

class Navbar extends Component {
  state = {
    title: "",
    sort: false,
    sortClicked: false
  };

  handleChange = evt => {
    const value = evt.target.value;
    this.setState({
      title: value
    });
  }

  sortBySalary = evt => {
    evt.preventDefault();

    if (this.state.sort) {
      this.setState({
        sort: false
      })
    } else {
      this.setState({
        sort: true
      })
    }
    this.setState({
      sortClicked: true
    })
  }

  reset = evt => {
    evt.preventDefault();
    this.setState({
      sortClicked: false
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Employee Directory</span>
          <form className="form-inline">
            <input onChange={this.handleChange} className="form-control mr-sm-2" type="search" placeholder="Filter By Title" aria-label="Search" />
            <button onClick={this.sortBySalary} className="btn btn-outline-success my-2 my-sm-0 ml-5" type="submit">Sort By Salary</button>
            <button onClick={this.reset} className="btn btn-outline-success my-2 my-sm-0 ml-5" type="submit">Reset</button>
          </form>
        </nav>
        <Table
          key={employees.id}
          employees={employees}
          title={this.state.title}
          sort={this.state.sort}
          sortClicked={this.state.sortClicked} />
      </div>
    );
  }
}

export default Navbar;