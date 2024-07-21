import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const FinanceAccountsHandling = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        address: '',
        email: '',
        mobile: '',
        dob: '',
        doj: '',
        username: '',
        password: '',
        role: ''
    });

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost/Office_Management/Handler/SupplierManagement.php');
            if(response.data.status === "success") {
                setEmployees(response.data.data); // Ensure you are setting the correct data
            } else {
                console.error('Error fetching data: ', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const handleShowAddModal = () => setShowAddModal(true);
    const handleCloseAddModal = () => {
        setShowAddModal(false);
        setNewEmployee({
            name: '',
            address: '',
            email: '',
            mobile: '',
            dob: '',
            doj: '',
            username: '',
            password: '',
            role: ''
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

    const addEmployerConfirmed = async () => {
        try {
            await axios.post('http://localhost/Office_Management/Handler/SupplierManagement.php', newEmployee);
            fetchEmployees(); // Refresh the list after adding a new employee
            handleCloseAddModal();
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    const updateEmployerConfirmed = async () => {
        // Update employer logic here
        // Example: await axios.put('http://localhost/Office_Management/Handler/SupplierManagement.php', updatedEmployee);
    };

    const deleteEmployerConfirmed = async (employeeId) => {
        // Delete employer logic here
        // Example: await axios.delete(`http://localhost/Office_Management/Handler/SupplierManagement.php?id=${employeeId}`);
        fetchEmployees(); // Refresh the list after deleting an employee
        handleCloseDeleteModal();
    };

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <main className='main-container'>
                <div className='main-title'>
                    <div className="row" style={{ marginRight: "1%" }}>
                        <div className="col-10" style={{ width: "78vw" }}>
                            <div className="row my-4">
                                <div className="col">
                                    <h6 className="text-secondary my-2">Office Management > Finance-Accounts Management</h6>
                                </div>
                                <div className="col text-end">
                                    <button type="button" className="btn btn-success" onClick={handleShowAddModal}>
                                        + Create
                                    </button>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead className="text-white" style={{ backgroundColor: "#C19A6B" }}>
                                <tr>
                                    <th scope="col" style={{ width: "12%" }}>Item ID</th>
                                    <th scope="col" style={{ width: "20%" }}>Item Name</th>
                                    <th scope="col" style={{ width: "20%" }}>Quantity</th>
                                    <th scope="col" style={{ width: "28%" }}>Price</th>
                                    <th scope="col" style={{ width: "14%" }}>Supplier</th>
                                </tr>
                                </thead>
                                <tbody>
                                {employees.map((employee, index) => (
                                    <tr key={index}>
                                        <td>{employee.item_id}</td>
                                        <td>{employee.item_name}</td>
                                        <td>{employee.qty}</td>
                                        <td>{employee.price}</td>
                                        <td>{employee.supplier}</td>
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
                                        <h4 className="modal-title fs-5" id="staticBackdropLabel">Add New Supplier</h4>
                                        <button type="button" className="btn-close" onClick={handleCloseAddModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Supplier Name</label>
                                            <input type="text" className="form-control" id="name" value={newEmployee.name} onChange={handleInputChange} />
                                            <small className="text-danger" id="warningAddEmployer1" style={{ display: 'none' }}>
                                                Please Enter Employer Name
                                            </small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" value={newEmployee.address} onChange={handleInputChange} />
                                            <small className="text-danger" id="warningAddEmployer2" style={{ display: 'none' }}>
                                                Please Enter Employer Address
                                            </small>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="epfNo" className="form-label">EPF No</label>
                                                    <input type="text" className="form-control" id="epfNo" value={newEmployee.epfNo} onChange={handleInputChange} />
                                                    <small className="text-danger" id="warningAddEmployer3" style={{ display: 'none' }}>
                                                        Please Enter EPF No
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="empNo" className="form-label">Supplier Number</label>
                                                    <input type="number" className="form-control" id="empNo" value={newEmployee.empNo} onChange={handleInputChange} />
                                                    <small className="text-danger" id="warningAddEmployer4" style={{ display: 'none' }}>
                                                        Please Enter Employee Number
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                                    <input type="number" className="form-control" id="mobile" value={newEmployee.mobile} onChange={handleInputChange} />
                                                    <small className="text-danger" id="warningAddEmployer6" style={{ display: 'none' }}>
                                                        Please Enter Mobile Number
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Email Address</label>
                                                    <input type="text" className="form-control" id="email" value={newEmployee.email} onChange={handleInputChange} />
                                                    <small className="text-danger" id="warningAddEmployer7" style={{ display: 'none' }}>
                                                        Please Enter Email Address
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                                                    <input type="date" className="form-control" id="dob" value={newEmployee.dob} onChange={handleInputChange} />
                                                    <small className="text-danger" id="warningAddEmployer8" style={{ display: 'none' }}>
                                                        Please Enter Date of Birth
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="doj" className="form-label">Date of Joining</label>
                                                    <input type="date" className="form-control" id="doj" value={newEmployee.doj} onChange={handleInputChange} />
                                                    <small className="text-danger" id="warningAddEmployer9" style={{ display: 'none' }}>
                                                        Please Enter Date of Joining
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="role" className="form-label">Designation</label>
                                                    <select className="form-select" id="role" value={newEmployee.role} onChange={handleInputChange}>
                                                        <option value="2">Staff</option>
                                                        <option value="1">HR Manager</option>
                                                        <option value="0">Finance Manager</option>
                                                    </select>
                                                    <small className="text-danger" id="warningAddEmployer10" style={{ display: 'none' }}>
                                                        Please Select Designation
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <input type="password" className="form-control" id="password" value={newEmployee.password} onChange={handleInputChange} />
                                                    <small className="text-danger" id="warningAddEmployer11" style={{ display: 'none' }}>
                                                        Please Enter Password
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseAddModal}>Cancel</button>
                                        <button type="button" className="btn btn-success" onClick={addEmployerConfirmed}>Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Update Employee Modal */}
                        <div className={`modal fade bd-example-modal-lg ${showUpdateModal ? "show d-block" : ""}`}
                             tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title fs-5" id="staticBackdropLabel">Update Supplier</h4>
                                        <button type="button" className="btn-close" onClick={handleCloseUpdateModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* Update form content here */}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseUpdateModal}>Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={updateEmployerConfirmed}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Delete Employee Modal */}
                        <div className={`modal fade bd-example-modal-lg ${showDeleteModal ? "show d-block" : ""}`}
                             tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title fs-5" id="staticBackdropLabel">Delete Supplier</h4>
                                        <button type="button" className="btn-close" onClick={handleCloseDeleteModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Are you sure you want to delete this supplier?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseDeleteModal}>Cancel</button>
                                        <button type="button" className="btn btn-danger" onClick={deleteEmployerConfirmed}>Delete</button>
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

export default FinanceAccountsHandling;
