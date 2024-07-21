import React, { useState, useEffect } from 'react';
import '../styleSheets/adminDashboard.css';
import '../../App.css';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

const OrderControlling = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [orders, setOrders] = useState([]);
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        // Fetch orders from backend
        fetch('http://localhost/Office_Management/Hadler/OrderManagement.php')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setOrders(data.data);
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => console.error('Error fetching orders:', error));
    }, []);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const [modalState, setModalState] = useState({
        addOrderModal: false,
        updateOrderModal: false,
        deleteConfirmationModal: false,
    });

    const viewAddOrderModal = () => {
        setModalState({ ...modalState, addOrderModal: true });
    };

    const closeAddOrderModal = () => {
        setModalState({ ...modalState, addOrderModal: false });
    };

    const addOrderConfirmed = () => {
        closeAddOrderModal();
    };

    useEffect(() => {
        const role = localStorage.getItem('role');
        setUserRole(role);
        console.log(userRole)
    }, []);

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <main className='main-container'>
                <div className='main-title'>
                    <div className='row' style={{ marginRight: '1%' }}>
                        <div className='col-10' style={{ width: '78vw' }}>
                            <div className='row my-4'>
                                <div className='col'>
                                    <h6 className='text-secondary my-2'>
                                        Office Project Management > Order Management
                                    </h6>
                                </div>
                                {userRole === 'HRManager' || 'FinanceManager' ? (
                                    <div className='col text-end'>
                                        <button
                                            type='button'
                                            className='btn btn-success'
                                            onClick={viewAddOrderModal}
                                        >
                                            + Add Order
                                        </button>
                                    </div>
                                ) : null}
                                
                                    </div>
                                    <div className=''>
                                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                                {orders.map((order, idx) => (
                                    <div className='col' key={idx}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='p-1 row'>
                                            <div className='col-8'>
                                                <p>Order ID - #{order.order_id}</p>
                                            </div>
                                                        <div className='col-4 text-end'>
                                                            <span className={`badge bg-${order.status === 'Pending' ? 'secondary' : 'primary'}`}>{order.status}</span>
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
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td style={{ width: '12%' }}>{order.item_name}</td>
                                                            <td style={{ width: '20%' }}>{order.quantity}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <p>Ordered Date - {order.ordered_date}</p>
                                                    <p>Supplier Name - {order.supplier_name}</p>
                                                    <div className='text-center'>
                                                        <button type='button' className='btn btn-success'>
                                                            Approve
                                                        </button>
                                                        <button type='button' className='btn btn-danger'>
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Add Order Modal */}
            <div
                className={`modal fade bd-example-modal-lg ${modalState.addOrderModal ? 'show' : ''}`}
                style={{ display: modalState.addOrderModal ? 'block' : 'none' }}
                tabIndex='-1'
                role='dialog'
                aria-labelledby='myLargeModalLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog modal-lg'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title fs-5' id='staticBackdropLabel'>
                                Add New Order
                            </h4>
                        </div>
                        <div className='modal-body'>
                            <div className='mb-3'>
                                <label className='form-label'>Order Name</label>
                                <input type='text' className='form-control' id='name' />
                                <small
                                    className='text-danger'
                                    id='warningAddOrder1'
                                    style={{ display: 'none' }}
                                >
                                    Please Enter Order Name
                                </small>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Address</label>
                                <input type='text' className='form-control' id='address' />
                                <small
                                    className='text-danger'
                                    id='warningAddOrder2'
                                    style={{ display: 'none' }}
                                >
                                    Please Enter Order Address
                                </small>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className='mb-3'>
                                        <label className='form-label'>EPF No</label>
                                        <input type='text' className='form-control' id='epfNo' />
                                        <small
                                            className='text-danger'
                                            id='warningAddOrder3'
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
                                            id='warningAddOrder4'
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
                                            id='warningAddOrder5'
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
                                            id='warningAddOrder6'
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
                                            id='warningAddOrder7'
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
                                            id='warningAddOrder8'
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
                                            id='warningAddOrder9'
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
                                    id='warningAddOrder10'
                                    style={{ display: 'none' }}
                                >
                                    Please Enter Basic Salary
                                </small>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                onClick={closeAddOrderModal}
                            >
                                Close
                            </button>
                            <button
                                type='button'
                                className='btn btn-primary'
                                onClick={addOrderConfirmed}
                            >
                                Add Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderControlling;
