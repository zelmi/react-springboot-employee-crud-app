import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees:[]
        }
        this.addEmployee = this.addEmployee.bind(this);
    }
    
    // this is the best place for a rest api call 
    componentDidMount(){
        // use then bc this method returns a promise 
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees:  res.data});
        });

    }

    addEmployee(){
        // react router history can be used to go to a previous page or to go to the appropriate response page
        // react router passes a history object to each router as a prop 
        // push redirects user to the given route
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee first name</th>
                                <th>Employee last name</th>
                                <th>Employee email id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.id}>
                                        <td>
                                            {employee.firstName}
                                        </td>
                                        <td>
                                            {employee.lastName}
                                        </td>
                                        <td>
                                            {employee.emailID}
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;