import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const AccountsHandling = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [userRole, setUserRole] = useState('');
    const [newEmployee, setNewEmployee] = useState({
        employee_name: '',
        address: '',
        email: '',
        mobile_number: '',
        username: '',
        password: '',
        position: '',
        name: '',
        mobile: '',
        dob: '',
        doj: '',
        role: ''
    });
    const [selectedEmployee, setSelectedEmployee] = useState(null);

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
            position: '',
            name: '',
            mobile: '',
            dob: '',
            doj: '',
            role: ''
        });
    };

    const handleShowUpdateModal = () => setShowUpdateModal(true);
    const handleCloseUpdateModal = () => setShowUpdateModal(false);

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        setNewEmployee({...newEmployee, [id]: value});
    };

    const handleUpdateInputChange = (e) => {
        const {id, value} = e.target;
        setSelectedEmployee({...selectedEmployee, [id]: value});
    };

    const addEmployerConfirmed = () => {
        axios.post('http://localhost/Office_Management/Hadler/AccountManagement.php', newEmployee)
            .then(response => {
                const addedEmployee = {...newEmployee, employee_id: response.data.employee_id};
                setEmployees([...employees, addedEmployee]);
                handleCloseAddModal();
            })
            .catch(error => {
                console.error('There was an error adding the employee!', error);
            });
    };

    const updateEmployerConfirmed = () => {

    };

    const handleRowClick = (employee) => {
        setSelectedEmployee(employee);
        handleShowUpdateModal();
    };

    useEffect(() => {
        const role = localStorage.getItem('role');
        setUserRole(role);
        console.log(userRole)
    }, []);

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
                                    {userRole === 'admin' || 'HRManager' ? (
                                        <h6 className="text-secondary my-2">Office Management > Employee Management</h6>
                                    ) : (
                                        <h6 className="text-secondary my-2">Office Management > Finance-Accounts
                                            Management</h6>
                                    )}
                                </div>
                                <div className="col text-end">
                                    <button type="button" className="btn btn-success" onClick={handleShowAddModal}>
                                        + Create Account
                                    </button>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead className="text-white" style={{backgroundColor: "#C19A6B"}}>
                                {userRole === 'Admin' ? (
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
                                ) : userRole === 'HRManager' ? (
                                    <tr>
                                        <th scope="col" style={{width: "12%"}}>Employee ID</th>
                                        <th scope="col" style={{width: "20%"}}>Employee Name</th>
                                        <th scope="col" style={{width: "20%"}}>Email</th>
                                        <th scope="col" style={{width: "28%"}}>Address</th>
                                        <th scope="col" style={{width: "14%"}}>Mobile Number</th>
                                        <th scope="col" style={{width: "14%"}}>Position</th>
                                        <th scope="col" style={{width: "20%"}}>Username</th>
                                        <th scope="col" style={{width: "12%"}}>Password</th>
                                    </tr>
                                ) : (
                                    <tr>
                                        <th scope="col" style={{width: "12%"}}>Item ID</th>
                                        <th scope="col" style={{width: "20%"}}>Item Name</th>
                                        <th scope="col" style={{width: "20%"}}>Quantity</th>
                                        <th scope="col" style={{width: "28%"}}>Price</th>
                                        <th scope="col" style={{width: "14%"}}>Supplier</th>
                                    </tr>
                                )}
                                </thead>

                                {userRole === 'Admin' ? (
                                    <tbody>
                                    {employees.map((employee, index) => (
                                        <tr key={index} onClick={() => handleRowClick(employee)}>
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
                                ) : userRole === 'HRManager' ? (
                                    <tbody>
                                    {employees.map((employee, index) => (
                                        <tr key={index} onClick={() => handleRowClick(employee)}>
                                            <td>{index + 1}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.address}</td>
                                            <td>{employee.mobile}</td>
                                            <td>{employee.role}</td>
                                            <td>{employee.username}</td>
                                            <td>{employee.password}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                ) : (
                                    <tbody>
                                    {employees.map((employee, index) => (
                                        <tr key={index} onClick={() => handleRowClick(employee)}>
                                            <td>{employee.item_id}</td>
                                            <td>{employee.item_name}</td>
                                            <td>{employee.qty}</td>
                                            <td>{employee.price}</td>
                                            <td>{employee.supplier}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                )}
                            </table>
                        </div>

                        {/* Add Employee Modal */}
                        <div className={`modal fade bd-example-modal-lg ${showAddModal ? "show d-block" : ""}`}
                             tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">

                                        <h4 className="modal-title fs-5" id="staticBackdropLabel">Create New
                                            Account</h4>
                                        <button type="button" className="btn-close"
                                                onClick={handleCloseAddModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            {userRole === 'Admin' || 'HRManager' ? (
                                                <label htmlFor="employee_name" className="form-label">Employer
                                                    Name</label>
                                            ) : (
                                                <label htmlFor="name" className="form-label">Supplier Name</label>
                                            )}
                                            <input type="text" className="form-control" id="employee_name"
                                                   value={newEmployee.employee_name} onChange={handleInputChange}/>
                                            <small className="text-danger" id="warningAddEmployer1"
                                                   style={{display: 'none'}}>
                                                Please Enter Employer Name
                                            </small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address"
                                                   value={newEmployee.address} onChange={handleInputChange}/>
                                            <small className="text-danger" id="warningAddEmployer2"
                                                   style={{display: 'none'}}>
                                                Please Enter Employer Address
                                            </small>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">E-mail</label>
                                                    <input type="text" className="form-control" id="email"
                                                           value={newEmployee.email} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer3"
                                                           style={{display: 'none'}}>
                                                        Please Enter E-mail
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="mobile_number" className="form-label">Mobile
                                                    Number</label>
                                                <input type="text" className="form-control" id="mobile_number"
                                                       value={newEmployee.mobile_number}
                                                       onChange={handleInputChange}/>
                                                <small className="text-danger" id="warningAddEmployer4"
                                                       style={{display: 'none'}}>
                                                    Please Enter Mobile Number
                                                </small>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">Username</label>
                                                    <input type="text" className="form-control" id="username"
                                                           value={newEmployee.username} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer5"
                                                           style={{display: 'none'}}>
                                                        Please Enter Username
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <input type="password" className="form-control" id="password"
                                                           value={newEmployee.password} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer6"
                                                           style={{display: 'none'}}>
                                                        Please Enter Password
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        {userRole === 'FinanceManager' || 'HRManager' ? (
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="dob" className="form-label">Date of
                                                            Birth</label>
                                                        <input type="date" className="form-control" id="dob"
                                                               value={newEmployee.dob}
                                                               onChange={handleInputChange}/>
                                                        <small className="text-danger" id="warningAddEmployer8"
                                                               style={{display: 'none'}}>
                                                            Please Enter Date of Birth
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="doj" className="form-label">Date of
                                                            Joining</label>
                                                        <input type="date" className="form-control" id="doj"
                                                               value={newEmployee.doj}
                                                               onChange={handleInputChange}/>
                                                        <small className="text-danger" id="warningAddEmployer9"
                                                               style={{display: 'none'}}>
                                                            Please Enter Date of Joining
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}

                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="role" className="form-label">Designation</label>
                                                    <select className="form-select" id="role" value={newEmployee.role}
                                                            onChange={handleInputChange}>
                                                        <option value="2">Staff</option>
                                                        <option value="1">HR Manager</option>
                                                        <option value="0">Finance Manager</option>
                                                    </select>
                                                    <small className="text-danger" id="warningAddEmployer7"
                                                           style={{display: 'none'}}>
                                                        Please Enter Role
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-6"></div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                onClick={handleCloseAddModal}>
                                            Cancel
                                        </button>
                                        <button type="button" className="btn btn-success"
                                                onClick={addEmployerConfirmed}>
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Update Employer Modal */}
                        {/*<div className={`modal fade bd-example-modal-lg ${showUpdateModal ? "show d-block" : ""}`}*/}
                        {/*     tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">*/}
                        {/*    <div className="modal-dialog modal-lg">*/}
                        {/*        <div className="modal-content">*/}
                        {/*            <div className="modal-header">*/}
                        {/*                <h4 className="modal-title fs-5" id="staticBackdropLabel">Update Account</h4>*/}
                        {/*                <button type="button" className="btn-close"*/}
                        {/*                        onClick={handleCloseUpdateModal}></button>*/}
                        {/*            </div>*/}
                        {/*            <div className="modal-body">*/}
                        {/*                {selectedEmployee && (*/}
                        {/*                    <>*/}
                        {/*                        <div className="mb-3">*/}
                        {/*                            <label htmlFor="employee_name" className="form-label">Employer Name</label>*/}
                        {/*                            <input type="text" className="form-control" id="employee_name"*/}
                        {/*                                   value={selectedEmployee.employee_name} onChange={handleUpdateInputChange}/>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="mb-3">*/}
                        {/*                            <label htmlFor="address" className="form-label">Address</label>*/}
                        {/*                            <input type="text" className="form-control" id="address"*/}
                        {/*                                   value={selectedEmployee.address} onChange={handleUpdateInputChange}/>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="row">*/}
                        {/*                            <div className="col">*/}
                        {/*                                <div className="mb-3">*/}
                        {/*                                    <label htmlFor="email" className="form-label">E-mail</label>*/}
                        {/*                                    <input type="text" className="form-control" id="email"*/}
                        {/*                                           value={selectedEmployee.email} onChange={handleUpdateInputChange}/>*/}
                        {/*                                </div>*/}
                        {/*                            </div>*/}
                        {/*                            <div className="col">*/}
                        {/*                                <div className="mb-3">*/}
                        {/*                                    <label htmlFor="mobile_number" className="form-label">Mobile Number</label>*/}
                        {/*                                    <input type="text" className="form-control" id="mobile_number"*/}
                        {/*                                           value={selectedEmployee.mobile_number} onChange={handleUpdateInputChange}/>*/}
                        {/*                                </div>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="row">*/}
                        {/*                            <div className="col-6">*/}
                        {/*                                <div className="mb-3">*/}
                        {/*                                    <label htmlFor="username" className="form-label">Username</label>*/}
                        {/*                                    <input type="text" className="form-control" id="username"*/}
                        {/*                                           value={selectedEmployee.username} onChange={handleUpdateInputChange}/>*/}
                        {/*                                </div>*/}
                        {/*                            </div>*/}
                        {/*                            <div className="col-6">*/}
                        {/*                                <div className="mb-3">*/}
                        {/*                                    <label htmlFor="password" className="form-label">Password</label>*/}
                        {/*                                    <input type="password" className="form-control" id="password"*/}
                        {/*                                           value={selectedEmployee.password} onChange={handleUpdateInputChange}/>*/}
                        {/*                                </div>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="row">*/}
                        {/*                            <div className="col-6">*/}
                        {/*                                <div className="mb-3">*/}
                        {/*                                    <label htmlFor="role" className="form-label">Designation</label>*/}
                        {/*                                    <select className="form-select" id="role" value={selectedEmployee.role}*/}
                        {/*                                            onChange={handleUpdateInputChange}>*/}
                        {/*                                        <option value="2">Staff</option>*/}
                        {/*                                        <option value="1">HR Manager</option>*/}
                        {/*                                        <option value="0">Finance Manager</option>*/}
                        {/*                                    </select>*/}
                        {/*                                </div>*/}
                        {/*                            </div>*/}
                        {/*                            <div className="col-6"></div>*/}
                        {/*                        </div>*/}
                        {/*                    </>*/}
                        {/*                )}*/}
                        {/*            </div>*/}
                        {/*            <div className="modal-footer">*/}
                        {/*                <button type="button" className="btn btn-secondary"*/}
                        {/*                        onClick={handleCloseUpdateModal}>*/}
                        {/*                    Cancel*/}
                        {/*                </button>*/}
                        {/*                <button type="button" className="btn btn-success"*/}
                        {/*                        onClick={updateEmployerConfirmed}>*/}
                        {/*                    Update Account*/}
                        {/*                </button>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </main>
        </div>
    );
};

export default AccountsHandling;
