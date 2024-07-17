import React, {useState} from 'react';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const HRAccountsHandling = () => {
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

    const addEmployerConfirmed = () => {
        setEmployees([...employees, newEmployee]);
        handleCloseAddModal();
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
                                    <th scope="col" style={{width: "12%"}}>Employee ID</th>
                                    <th scope="col" style={{width: "20%"}}>Employee Name</th>
                                    <th scope="col" style={{width: "20%"}}>Email</th>
                                    <th scope="col" style={{width: "28%"}}>Address</th>
                                    <th scope="col" style={{width: "14%"}}>Mobile Number</th>
                                    <th scope="col" style={{width: "14%"}}>Position</th>
                                    <th scope="col" style={{width: "20%"}}>Username</th>
                                    <th scope="col" style={{width: "12%"}}>Password</th>
                                </tr>
                                </thead>
                                <tbody>
                                {employees.map((employee, index) => (
                                    <tr key={index}>
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
                            </table>
                        </div>

                        {/* Add Employee Modal */}
                        <div className={`modal fade bd-example-modal-lg ${showAddModal ? "show d-block" : ""}`}
                             tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title fs-5" id="staticBackdropLabel">Create New Account</h4>
                                        <button type="button" className="btn-close" onClick={handleCloseAddModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Employer Name</label>
                                            <input type="text" className="form-control" id="name" value={newEmployee.name} onChange={handleInputChange}/>
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
                                                        Please Enter EPF No
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                                    <input type="number" className="form-control" id="mobile" value={newEmployee.mobile} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer4" style={{display: 'none'}}>
                                                        Please Enter Employee Number
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                                                    <input type="date" className="form-control" id="dob" value={newEmployee.dob} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer8" style={{display: 'none'}}>
                                                        Please Enter Date of Birth
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="doj" className="form-label">Joined Date</label>
                                                    <input type="date" className="form-control" id="doj" value={newEmployee.doj} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer9" style={{display: 'none'}}>
                                                        Please Enter Joined Date
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">Username</label>
                                                    <input type="text" className="form-control" id="username" value={newEmployee.username} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer6" style={{display: 'none'}}>
                                                        Please Enter Mobile Number
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <input type="password" className="form-control" id="password" value={newEmployee.password} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer7" style={{display: 'none'}}>
                                                        Please Enter Email Address
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="mb-3">
                                                    <label htmlFor="role" className="form-label">Role</label>
                                                    <select className="form-select" id="role" value={newEmployee.role} onChange={handleInputChange}>
                                                        <option value="">Select the Role</option>
                                                        <option value="HR Manager">HR Manager</option>
                                                        <option value="Finance Manager">Finance Manager</option>
                                                    </select>
                                                    <small className="text-danger" id="warningAddEmployer2" style={{display: 'none'}}>
                                                        Please Enter Employer Address
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" onClick={handleCloseAddModal}>Cancel</button>
                                        <button type="button" className="btn btn-success" onClick={addEmployerConfirmed}>Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Update Supplier Modal */}
                        <div className={`modal fade bd-example-modal-lg ${showUpdateModal ? "show d-block" : ""}`}
                             tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title fs-5" id="staticBackdropLabel">Update Supplier</h4>
                                        <button type="button" className="btn-close" onClick={handleCloseUpdateModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* Update Supplier form fields */}
                                        <div className="mb-3">
                                            <label htmlFor="nameuID" className="form-label">Supplier Name</label>
                                            <input type="text" className="form-control" id="nameuID" name="nameu"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="addressuID" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="addressuID" name="addressu"/>
                                        </div>
                                        {/* Add other fields as needed */}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" onClick={handleCloseUpdateModal}>Cancel</button>
                                        <button type="button" className="btn btn-success" onClick={updateEmployerConfirmed}>Update Supplier</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Delete Supplier Modal */}
                        <div className={`modal fade ${showDeleteModal ? "show d-block" : ""}`} tabindex="-1"
                             role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title fs-5" id="staticBackdropLabel">Delete Supplier</h4>
                                        <button type="button" className="btn-close" onClick={handleCloseDeleteModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        Are you sure want to delete this Supplier?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success" onClick={handleCloseDeleteModal}>No</button>
                                        <button type="button" className="btn btn-danger" onClick={deleteEmployerConfirmed}>Yes, Delete</button>
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

export default HRAccountsHandling;
