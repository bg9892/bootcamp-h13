import React from "react";

function TableBody(props) {

  if (props.sortClicked) {
    if (props.sort) {
      props.employees.sort((a, b) => (a.salary > b.salary) ? 1 : -1);
    } else {
      props.employees.sort((a, b) => (a.salary < b.salary) ? 1 : -1);
    }
  } else {
    props.employees.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }

  function employees() {
    if (props.title) {
      const title = props.employees.filter(
        employee => employee.title === props.title[0].toUpperCase() + props.title.slice(1)
      );
      return (
        title.map(info => {
          return <tr key={info.id}>
            <td>{info.id}</td>
            <td>{info.firstname}</td>
            <td>{info.lastname}</td>
            <td>{info.title}</td>
            <td>{info.salary}</td>
          </tr>
        })
      )
    } else {
      return (
        props.employees.map(info => {
          return <tr key={info.id}>
            <td>{info.id}</td>
            <td>{info.firstname}</td>
            <td>{info.lastname}</td>
            <td>{info.title}</td>
            <td>{info.salary}</td>
          </tr>
        })
      )
    }
  }

  return (
    <tbody>
      {employees()}
    </tbody>
  )
};

export default TableBody;