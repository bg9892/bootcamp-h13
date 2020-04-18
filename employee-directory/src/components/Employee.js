import React from "react";

function Employee(props) {
  return (
    <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{props.info.id}</th>
            <td>{props.info.firstname}</td>
            <td>{props.info.lastname}</td>
            <td>{props.info.title}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
