import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  // this is the best place for a rest api call
  componentDidMount() {
    // use then bc this method returns a promise
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <Link to="/add-employee" className='row'>
          <button  className='btn btn-primary'>Add Employee</button>
        </Link>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee first name</th>
                <th>Employee last name</th>
                <th>Employee email id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailID}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;