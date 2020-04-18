import React from "react";
import TableBody from "../TableBody";

function Table(props) {
  return (
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Title</th>
          <th scope="col">Salary</th>
        </tr>
      </thead>
      <TableBody key={props.employees.id} employees={props.employees} title={props.title} handleFormSubmit={props.handleFormSubmit} />
    </table>
  );
}

export default Table;