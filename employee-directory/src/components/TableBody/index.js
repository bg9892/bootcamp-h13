import React from "react";

function TableBody(props) {
  return <tbody>
    {props.employees.map(info => {
      return <tr key={info.id}>
        <td>{info.id}</td>
        <td>{info.firstname}</td>
        <td>{info.lastname}</td>
        <td>{info.title}</td>
        <td>{info.salary}</td>
      </tr>
    })}
  </tbody>
};

export default TableBody;