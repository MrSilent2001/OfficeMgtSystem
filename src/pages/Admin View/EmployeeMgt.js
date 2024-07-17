import React, {useState} from 'react';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const EmployeeMgt = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            address: "123 Main St, Anytown",
            mobile: "123-456-7890",
            role: "HR Manager",
            username: "johndoe",
            password: "********"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            address: "456 Elm St, Othertown",
            mobile: "987-654-3210",
            role: "Finance Manager",
            username: "janesmith",
            password: "********"
        }
        // Add more employees as needed
    ]);

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <main className='main-container'>
                <div className='main-title'>
                    <div className="row" style={{marginRight: "1%"}}>
                        <div className="col-10" style={{width: "78vw"}}>
                            <div className="row-my-4">
                                <div className="col">
                                    <h6 className="text-secondary my-2">Office Management > Employee Management</h6>
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
                                {employees.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
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
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EmployeeMgt;