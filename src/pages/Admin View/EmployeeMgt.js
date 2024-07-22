import React, { useState, useEffect } from 'react';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import axios from 'axios';

const EmployeeMgt = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [userRole, setUserRole] = useState('');
    const [newEmployee, setNewEmployee] = useState({
        NIC: '',
        name: '',
        address: '',
        mobileNumber: '',
        epfNo: '',
        empNo: '',
        email: '',
        dob: '',
        doj: ''
    });
    const [errors, setErrors] = useState({});

    const openSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost/Office_Management/Hadler/employeeManagement.php');
            setEmployees(response.data.data);
            console.log("data ", response);
        } catch (error) {
            console.error("There was an error fetching the employees!", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        Object.keys(newEmployee).forEach(key => {
            if (!newEmployee[key]) {
                formErrors[key] = `${key} is required`;
            }
        });
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const addEmployee = async () => {
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost/Office_Management/Hadler/employeeManagement.php', newEmployee);
                if (response.data.status === 'success') {
                    fetchEmployees();
                    setShowModal(false);
                    setNewEmployee({
                        NIC: '',
                        name: '',
                        address: '',
                        mobileNumber: '',
                        epfNo: '',
                        empNo: '',
                        email: '',
                        dob: '',
                        doj: ''
                    });
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.error("There was an error adding the employee!", error);
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    useEffect(() => {
        const role = localStorage.getItem('role');
        setUserRole(role);
        console.log(userRole)
    }, []);

    return (
        <div className='grid-container'>
            <Header openSidebar={openSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
            <main className='main-container'>
                <div className='main-title'>
                    <div className="row" style={{ marginRight: "1%" }}>
                        <div className="col-10" style={{ width: "78vw" }}>
                            <div className="row-my-4">
                                <div className="col">
                                    <h6 className="text-secondary my-2">Office Management > Employee Management</h6>
                                </div>
                                {userRole === 'HRManager' ? (
                                <div className="col text-end">
                                    <button type="button" className="btn btn-success" onClick={() => setShowModal(true)}>+ Add Employee</button>
                                </div>
                                ) : null }
                            </div>
                            <table className="table table-bordered">
                                <thead className="text-white" style={{ backgroundColor: "#C19A6B" }}>
                                <tr>
                                    <th scope="col">Employee ID</th>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">EPF No</th>
                                    <th scope="col">Date of Birth</th>
                                    <th scope="col">Date of Joining</th>
                                </tr>
                                </thead>
                                <tbody>
                                {employees.map(employee => (
                                    <tr key={employee.empNo}>
                                        <td>{employee.NIC}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.epfNo}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.doj}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title fs-5" id="staticBackdropLabel">Add New Employee</h4>
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                {Object.keys(newEmployee).map((key) => (
                                    <div className="mb-3" key={key}>
                                        <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                        <input
                                            type={key === 'dob' || key === 'doj' ? 'date' : key === 'mobileNumber' || key === 'empNo' ? 'number' : 'text'}
                                            className="form-control"
                                            name={key}
                                            value={newEmployee[key]}
                                            onChange={handleInputChange}
                                        />
                                        {errors[key] && <div className="text-danger">{errors[key]}</div>}
                                    </div>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={addEmployee}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeMgt;
