import React, {useState} from 'react';
import "./styleSheets/adminDashboard.css";
import '../App.css';
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const SupplierHandling = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleShowAddModal = () => setShowAddModal(true);
    const handleCloseAddModal = () => setShowAddModal(false);

    const handleShowUpdateModal = () => setShowUpdateModal(true);
    const handleCloseUpdateModal = () => setShowUpdateModal(false);

    const handleShowDeleteModal = () => setShowDeleteModal(true);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);

    const addEmployerConfirmed = () => {
        // Add employer logic here
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
                                    <h6 className="text-secondary my-2">Office Management > Supplier Management</h6>
                                </div>
                                <div className="col text-end">
                                    <button type="button" className="btn btn-success" onClick={handleShowAddModal}>
                                        + Add Supplier
                                    </button>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead className="text-white" style={{backgroundColor: "#C19A6B"}}>
                                <tr>
                                    <th scope="col" style={{width: "12%"}}>Supplier ID</th>
                                    <th scope="col" style={{width: "20%"}}>Supplier Name</th>
                                    <th scope="col" style={{width: "28%"}}>Official Address</th>
                                    <th scope="col" style={{width: "14%"}}>Mobile Number</th>
                                    <th scope="col" style={{width: "14%"}}>Supply Item</th>
                                    <th scope="col" style={{width: "12%"}}></th>
                                </tr>
                                </thead>
                                <tbody id="">
                                {/* Supplier rows go here */}
                                </tbody>
                            </table>
                        </div>

                        {/* Add Supplier Modal */}
                        <div className={`modal fade bd-example-modal-lg ${showAddModal ? "show d-block" : ""}`}
                             tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title fs-5" id="staticBackdropLabel">Add New Supplier</h4>
                                        <button type="button" className="btn-close"
                                                onClick={handleCloseAddModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Employer Name</label>
                                            <input type="text" className="form-control" id="name"/>
                                            <small className="text-danger" id="warningAddEmployer1" style={{display: 'none'}}>
                                                Please Enter Employer Name
                                            </small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" />
                                            <small className="text-danger" id="warningAddEmployer2" style={{display: 'none'}}>
                                                Please Enter Employer Address
                                            </small>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="epfNo" className="form-label">EPF No</label>
                                                    <input type="text" className="form-control" id="epfNo" />
                                                    <small className="text-danger" id="warningAddEmployer3" style={{display: 'none'}}>
                                                        Please Enter EPF No
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="empNo" className="form-label">Employee
                                                        Number</label>
                                                    <input type="number" className="form-control" id="empNo"/>
                                                    <small className="text-danger" id="warningAddEmployer4" style={{display: 'none'}}>
                                                        Please Enter Employee Number
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="nic" className="form-label">NIC</label>
                                                    <input type="text" className="form-control" id="nic" />
                                                    <small className="text-danger" id="warningAddEmployer5" style={{display: 'none'}}>
                                                        Please Enter NIC
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="mb-3">
                                                    <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                                    <input type="number" className="form-control" id="mobile"/>
                                                    <small className="text-danger" id="warningAddEmployer6" style={{display: 'none'}}>
                                                        Please Enter Mobile Number
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Email Address</label>
                                                    <input type="text" className="form-control" id="email" />
                                                    <small className="text-danger" id="warningAddEmployer7" style={{display: 'none'}}>
                                                        Please Enter Email Address
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                                                    <input type="date" className="form-control" id="dob" />
                                                    <small className="text-danger" id="warningAddEmployer8" style={{display: 'none'}}>
                                                        Please Enter Date of Birth
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="doj" className="form-label">Joined Date</label>
                                                    <input type="date" className="form-control" id="doj" />
                                                    <small className="text-danger" id="warningAddEmployer9" style={{display: 'none'}}>
                                                        Please Enter Joined Date
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger"
                                                onClick={handleCloseAddModal}>Cancel
                                        </button>
                                        <button type="button" className="btn btn-success"
                                                onClick={addEmployerConfirmed}>Add Supplier
                                        </button>
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
                                        <button type="button" className="btn-close"
                                                onClick={handleCloseUpdateModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* Update Supplier form fields */}
                                        <div className="mb-3">
                                            <label htmlFor="nameuID" className="form-label">Supplier Name</label>
                                            <input type="text" className="form-control" id="nameuID" name="nameu"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="addressuID" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="addressuID"
                                                   name="addressu"/>
                                        </div>
                                        {/* Add other fields as needed */}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger"
                                                onClick={handleCloseUpdateModal}>Cancel
                                        </button>
                                        <button type="button" className="btn btn-success"
                                                onClick={updateEmployerConfirmed}>Update Supplier
                                        </button>
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
                                        <button type="button" className="btn-close"
                                                onClick={handleCloseDeleteModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        Are you sure want to delete this Supplier?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success"
                                                onClick={handleCloseDeleteModal}>No
                                        </button>
                                        <button type="button" className="btn btn-danger"
                                                onClick={deleteEmployerConfirmed}>Yes, Delete
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

export default SupplierHandling;