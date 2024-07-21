import React, { useState } from 'react';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const FinanceSalesMgt = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [salesData, setSalesData] = useState([]);
    const [newSale, setNewSale] = useState({
        itemName: '',
        quantity: '',
        price: '',
        date: '',
        status: 'Pending' // Default status
    });

    const toggleSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const [showAddSalesModal, setShowAddSalesModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [saleToDelete, setSaleToDelete] = useState(null);

    const viewAddSalesModal = () => {
        setShowAddSalesModal(true);
    };

    const closeAddSalesModal = () => {
        setShowAddSalesModal(false);
    };

    const addSalesConfirmed = () => {
        console.log("Adding Sale:", newSale);
        setSalesData([...salesData, { ...newSale, id: new Date().getTime() }]);
        console.log("Updated Sales Data:", salesData);
        setNewSale({
            itemName: '',
            quantity: '',
            price: '',
            date: '',
            status: 'Pending'
        });
        closeAddSalesModal();
    };

    const viewDeleteConfirmationModal = (id) => {
        setSaleToDelete(id);
        setShowDeleteModal(true);
    };

    const closeDeleteConfirmationModal = () => {
        setShowDeleteModal(false);
    };

    const deleteSalesConfirmed = () => {
        setSalesData(salesData.filter(sale => sale.id !== saleToDelete));
        setShowDeleteModal(false);
        setSaleToDelete(null);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewSale({ ...newSale, [id]: value });
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
                                <div className='col text-end'>
                                    <button
                                        type='button'
                                        className='btn btn-success'
                                        onClick={viewAddSalesModal}
                                    >
                                        + Add Sales
                                    </button>
                                </div>
                            </div>
                            <div className=''>
                                <div className='row row-cols-1 row-cols-md-3 g-4'>
                                    {salesData.map((sale) => (
                                        <div className='col' key={sale.id}>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <div className='p-1 row'>
                                                        <div className='col-8'>
                                                            <p>Sales ID - #{sale.id}</p>
                                                        </div>
                                                        <div className='col-4 text-end'>
                                                            <span className={`badge bg-${sale.status === 'Completed' ? 'primary' : 'secondary'}`}>{sale.status}</span>
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
                                                            <td style={{ width: '12%' }}>{sale.itemName}</td>
                                                            <td style={{ width: '20%' }}>{sale.quantity}</td>
                                                            <td style={{ width: '20%' }}>{sale.price}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <p>Date - {sale.date}</p>
                                                    <div className='text-center'>
                                                        <button type='button' className='btn btn-success'>
                                                            Success
                                                        </button>
                                                        <button type='button' className='btn btn-danger' onClick={() => viewDeleteConfirmationModal(sale.id)}>
                                                            Danger
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

                <div
                    className={`modal fade bd-example-modal-lg ${showAddSalesModal ? 'show' : ''}`}
                    tabIndex='-1'
                    role='dialog'
                    aria-labelledby='myLargeModalLabel'
                    aria-hidden='true'
                    style={{ display: showAddSalesModal ? 'block' : 'none' }}
                >
                    <div className='modal-dialog modal-lg'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h4 className='modal-title fs-5' id='staticBackdropLabel'>
                                    Add New Sale
                                </h4>
                            </div>
                            <div className='modal-body'>
                                <div className='mb-3'>
                                    <label htmlFor="itemName" className='form-label'>Item Name</label>
                                    <input type='text' className='form-control' id='itemName' value={newSale.itemName} onChange={handleInputChange} />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Qty</label>
                                    <input type='text' className='form-control' id='quantity' value={newSale.quantity} onChange={handleInputChange} />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Price</label>
                                    <input type='text' className='form-control' id='price' value={newSale.price} onChange={handleInputChange} />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Date</label>
                                    <input type='date' className='form-control' id='date' value={newSale.date} onChange={handleInputChange} />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Status</label>
                                    <select className='form-control' id='status' value={newSale.status} onChange={handleInputChange}>
                                        <option value="Pending">Pending</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button
                                    type='button'
                                    className='btn btn-secondary'
                                    onClick={closeAddSalesModal}
                                >
                                    Close
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-primary'
                                    onClick={addSalesConfirmed}
                                >
                                    Add
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
                                    className='btn btn-secondary'
                                    onClick={closeDeleteConfirmationModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-danger'
                                    onClick={deleteSalesConfirmed}
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

export default FinanceSalesMgt;
