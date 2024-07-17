import React, { useState } from 'react';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const SalesMgt = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const toggleSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const viewAddEmployerModal = () => {
        setShowAddModal(true);
    };

    const closeAddEmployerModal = () => {
        setShowAddModal(false);
    };

    const addEmployerConfirmed = () => {
        // Add employer logic here
        closeAddEmployerModal();
    };

    const viewDeleteConfirmationModal = () => {
        setShowDeleteModal(true);
    };

    const closeDeleteConfirmationModal = () => {
        setShowDeleteModal(false);
    };

    const deleteEmployerConfirmed = () => {
        // Delete employer logic here
        closeDeleteConfirmationModal();
    };

    return (
        <div className='grid-container'>
            <Header OpenSidebar={toggleSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={toggleSidebar} />
            <main className='main-container'>
                <div className='main-title'>
                    <div className='row' style={{ marginRight: '1%' }}>
                        <div className='col-10' style={{ width: '78vw' }}>
                            <div className='row my-4'>
                                <div className='col'>
                                    <h6 className='text-secondary my-2'>
                                        Office Project Management > Sales Management
                                    </h6>
                                </div>
                            </div>
                            <div className=''>
                                <div className='row row-cols-1 row-cols-md-3 g-4'>
                                    {[...Array(3)].map((_, idx) => (
                                        <div className='col' key={idx}>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <div className='p-1 row'>
                                                        <div className='col-8'>
                                                            <p>Sales ID - #2406300005654</p>
                                                        </div>
                                                        <div className='col-4 text-end'>
                                                            <span className='badge bg-secondary'>Pending</span>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <table className='table table-bordered'>
                                                        <thead
                                                            className='text-white'
                                                            style={{ backgroundColor: '#C19A6B' }}
                                                        >
                                                        <tr>
                                                            <th scope='col' style={{ width: '12%' }}>
                                                                Item Name
                                                            </th>
                                                            <th scope='col' style={{ width: '20%' }}>
                                                                Quantity
                                                            </th>
                                                            <th scope='col' style={{ width: '20%' }}>
                                                                Price
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td style={{ width: '12%' }}>Item 01</td>
                                                            <td style={{ width: '20%' }}>10</td>
                                                            <td style={{ width: '20%' }}>5000</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <p>Date - 30 / 06/ 2024</p>
                                                    <div className='text-center'>
                                                        <button type='button' className='btn btn-success'>
                                                            Success
                                                        </button>
                                                        <button type='button' className='btn btn-danger'>
                                                            Danger
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className='col'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <div className='p-1 row'>
                                                    <div className='col-8'>
                                                        <p>Sales ID - #2406300005621</p>
                                                    </div>
                                                    <div className='col-4 text-end'>
                                                        <span className='badge bg-primary'>Completed</span>
                                                    </div>
                                                </div>
                                                <hr />
                                                <table className='table table-bordered'>
                                                    <thead
                                                        className='text-white'
                                                        style={{ backgroundColor: '#C19A6B' }}
                                                    >
                                                    <tr>
                                                        <th scope='col' style={{ width: '12%' }}>Item Name</th>
                                                        <th scope='col' style={{ width: '20%' }}>Quantity</th>
                                                        <th scope='col' style={{ width: '20%' }}>
                                                            Price
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{ width: '12%' }}>Item 05</td>
                                                        <td style={{ width: '20%' }}>25</td>
                                                        <td style={{ width: '20%' }}>2500</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                <p>Date - 25 / 06/ 2024</p>
                                                <div className='text-center'>
                                                    <button type='button' className='btn btn-danger' onClick={viewDeleteConfirmationModal}>
                                                        DELETE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Employer Modal */}
                <div
                    className={`modal fade bd-example-modal-lg ${showAddModal ? 'show d-block' : ''}`}
                    tabIndex='-1'
                    role='dialog'
                    aria-labelledby='myLargeModalLabel'
                    aria-hidden='true'
                >
                    <div className='modal-dialog modal-lg'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h4 className='modal-title fs-5' id='staticBackdropLabel'>
                                    Add New  Sale
                                </h4>
                            </div>
                            <div className='modal-body'>
                                <div className='mb-3'>
                                    <label htmlFor="name" className='form-label'>Employer Name</label>
                                    <input type='text' className='form-control' id='name' />
                                    <small
                                        className='text-danger'
                                        id='warningAddEmployer1'
                                        style={{ display: 'none' }}
                                    >
                                        Please Enter Employer Name
                                    </small>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Address</label>
                                    <input type='text' className='form-control' id='address' />
                                    <small
                                        className='text-danger'
                                        id='warningAddEmployer2'
                                        style={{ display: 'none' }}
                                    >
                                        Please Enter Employer Address
                                    </small>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='mb-3'>
                                            <label className='form-label'>EPF No</label>
                                            <input type='text' className='form-control' id='epfNo' />
                                            <small
                                                className='text-danger'
                                                id='warningAddEmployer3'
                                                style={{ display: 'none' }}
                                            >
                                                Please Enter EPF No
                                            </small>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-3'>
                                            <label className='form-label'>Employee Number</label>
                                            <input type='number' className='form-control' id='empno' />
                                            <small
                                                className='text-danger'
                                                id='warningAddEmployer4'
                                                style={{ display: 'none' }}
                                            >
                                                Please Enter Employee Number
                                            </small>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-3'>
                                            <label className='form-label'>NIC</label>
                                            <input type='text' className='form-control' id='nic' />
                                            <small
                                                className='text-danger'
                                                id='warningAddEmployer5'
                                                style={{ display: 'none' }}
                                            >
                                                Please Enter NIC
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-4'>
                                        <div className='mb-3'>
                                            <label className='form-label'>Mobile Number</label>
                                            <input type='number' className='form-control' id='mobile' />
                                            <small
                                                className='text-danger'
                                                id='warningAddEmployer6'
                                                style={{ display: 'none' }}
                                            >
                                                Please Enter Mobile Number
                                            </small>
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <div className='mb-3'>
                                            <label className='form-label'>Email Address</label>
                                            <input type='text' className='form-control' id='email' />
                                            <small
                                                className='text-danger'
                                                id='warningAddEmployer7'
                                                style={{ display: 'none' }}
                                            >
                                                Please Enter Email Address
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='mb-3'>
                                            <label className='form-label'>Date of Birth</label>
                                            <input type='date' className='form-control' id='dob' />
                                            <small
                                                className='text-danger'
                                                id='warningAddEmployer8'
                                                style={{ display: 'none' }}
                                            >
                                                Please Enter Date of Birth
                                            </small>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-3'>
                                            <label className='form-label'>Designation</label>
                                            <input type='text' className='form-control' id='designation' />
                                            <small
                                                className='text-danger'
                                                id='warningAddEmployer9'
                                                style={{ display: 'none' }}
                                            >
                                                Please Enter Designation
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Basic Salary</label>
                                    <input type='text' className='form-control' id='salary' />
                                    <small
                                        className='text-danger'
                                        id='warningAddEmployer10'
                                        style={{ display: 'none' }}
                                    >
                                        Please Enter Basic Salary
                                    </small>
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button
                                    type='button'
                                    className='btn btn-success'
                                    onClick={closeAddEmployerModal}
                                >
                                    Close
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-primary'
                                    onClick={addEmployerConfirmed}
                                >
                                    Add Employer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delete Employer Confirmation Modal */}
                <div
                    className={`modal fade ${showDeleteModal ? 'show' : ''}`}
                    tabIndex='-1'
                    style={{ display: showDeleteModal ? 'block' : 'none' }}
                >
                    <div className='modal-dialog modal-sm'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title'>Delete Employer</h5>
                            </div>
                            <div className='modal-body'>Are you sure you want to delete this employer?</div>
                            <div className='modal-footer'>
                                <button
                                    type='button'
                                    className='btn btn-success'
                                    onClick={closeDeleteConfirmationModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-danger'
                                    onClick={deleteEmployerConfirmed}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SalesMgt;
