import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const AccountsHandling = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({
        employee_name: '',
        address: '',
        email: '',
        mobile_number: '',
        username: '',
        password: '',
        position: ''
    });

    useEffect(() => {
        // Fetch employees data from the backend
        axios.get('http://localhost/Office_Management/Hadler/AccountManagement.php')
            .then(response => {
                setEmployees(response.data.data); // Adjust this based on your PHP response structure
            })
            .catch(error => {
                console.error('There was an error fetching the employees data!', error);
            });
    }, []);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const handleShowAddModal = () => setShowAddModal(true);
    const handleCloseAddModal = () => {
        setShowAddModal(false);
        setNewEmployee({
            employee_name: '',
            address: '',
            email: '',
            mobile_number: '',
            username: '',
            password: '',
            position: ''
        });
    };

    const handleShowUpdateModal = () => setShowUpdateModal(true);
    const handleCloseUpdateModal = () => setShowUpdateModal(false);

    const handleShowDeleteModal = () => setShowDeleteModal(true);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewEmployee({ ...newEmployee, [id]: value });
    };

    const addEmployerConfirmed = () => {
        axios.post('http://localhost/Office_Management/Hadler/AccountManagement.php', newEmployee)
            .then(response => {
                setEmployees([...employees, newEmployee]);
                handleCloseAddModal();
            })
            .catch(error => {
                console.error('There was an error adding the employee!', error);
            });
    };

    const updateEmployerConfirmed = () => {
        // Update employer logic here
    };

    const deleteEmployerConfirmed = () => {
        // Delete employer logic here
    };

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <main className='main-container'>
                <div className='main-title'>
                    <div className="row" style={{marginRight: "1%"}}>
                        <div className="col-10" style={{width: "78vw"}}>
                            <div className="row my-4">
                                <div className="col">
                                    <h6 className="text-secondary my-2">Office Management > Employee Management</h6>
                                </div>
                                <div className="col text-end">
                                    <button type="button" className="btn btn-success" onClick={handleShowAddModal}>
                                        + Create User Account
                                    </button>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead className="text-white" style={{backgroundColor: "#C19A6B"}}>
                                <tr>
                                    <th scope="col">Employee ID</th>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Password</th>
                                </tr>
                                </thead>
                                <tbody>
                                {employees.map((employee, index) => (
                                    <tr key={index}>
                                        <td>{employee.employee_id}</td>
                                        <td>{employee.employee_name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.mobile_number}</td>
                                        <td>{employee.position}</td>
                                        <td>{employee.username}</td>
                                        <td>{employee.password}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Add Employee Modal */}
                        <div className={`modal fade bd-example-modal-lg ${showAddModal ? "show d-block" : ""}`}
                             tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title fs-5" id="staticBackdropLabel">Create New Account</h4>
                                        <button type="button" className="btn-close" onClick={handleCloseAddModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="employee_name" className="form-label">Employer Name</label>
                                            <input type="text" className="form-control" id="employee_name" value={newEmployee.employee_name} onChange={handleInputChange}/>
                                            <small className="text-danger" id="warningAddEmployer1" style={{display: 'none'}}>
                                                Please Enter Employer Name
                                            </small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" value={newEmployee.address} onChange={handleInputChange}/>
                                            <small className="text-danger" id="warningAddEmployer2" style={{display: 'none'}}>
                                                Please Enter Employer Address
                                            </small>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">E-mail</label>
                                                    <input type="text" className="form-control" id="email" value={newEmployee.email} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer3" style={{display: 'none'}}>
                                                        Please Enter E-mail
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="mobile_number" className="form-label">Mobile Number</label>
                                                    <input type="text" className="form-control" id="mobile_number" value={newEmployee.mobile_number} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer4" style={{display: 'none'}}>
                                                        Please Enter Mobile Number
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">Username</label>
                                                    <input type="text" className="form-control" id="username" value={newEmployee.username} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer5" style={{display: 'none'}}>
                                                        Please Enter Username
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <input type="password" className="form-control" id="password" value={newEmployee.password} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer6" style={{display: 'none'}}>
                                                        Please Enter Password
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="position" className="form-label">Role</label>
                                                    <input type="text" className="form-control" id="position" value={newEmployee.position} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer7" style={{display: 'none'}}>
                                                        Please Enter Role
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-6"></div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseAddModal}>
                                            Cancel
                                        </button>
                                        <button type="button" className="btn btn-success" onClick={addEmployerConfirmed}>
                                            Add Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Update Employer Modal */}
                        <div className={`modal fade bd-example-modal-lg ${showUpdateModal ? "show d-block" : ""}`}
                             tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title fs-5" id="staticBackdropLabel">Update Account</h4>
                                        <button type="button" className="btn-close" onClick={handleCloseUpdateModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* Update Employer Form */}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseUpdateModal}>
                                            Cancel
                                        </button>
                                        <button type="button" className="btn btn-success" onClick={updateEmployerConfirmed}>
                                            Update Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Delete Employer Modal */}
                        <div className={`modal fade ${showDeleteModal ? "show d-block" : ""}`} tabIndex="-1"
                             role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Delete Confirmation</h5>
                                        <button type="button" className="btn-close" onClick={handleCloseDeleteModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        Are you sure you want to delete this employee?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseDeleteModal}>
                                            Cancel
                                        </button>
                                        <button type="button" className="btn btn-danger" onClick={deleteEmployerConfirmed}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AccountsHandling;
