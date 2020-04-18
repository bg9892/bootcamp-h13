import React from 'react';
import './App.css';
// import Employee from './components/Employee';
import employees from "./employees.json"
import TableBody from './components/TableBody';
import Table from './components/Table';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      {/* <Table key={employees.id} employees={employees} /> */}
    </div>
  );
}

export default App;
