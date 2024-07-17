import React, { useState } from 'react';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const InventoryManagement = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [suppliers, setSuppliers] = useState([]);
    const [newSupplier, setNewSupplier] = useState({
        itemId: '',
        itemName: '',
        qty: '',
        price: '',
        supplier: '',
        manufacturedDate: ''
    });

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const handleShowAddModal = () => setShowAddModal(true);
    const handleCloseAddModal = () => {
        setShowAddModal(false);
        setNewSupplier({
            itemId: '',
            itemName: '',
            qty: '',
            price: '',
            supplier: '',
            manufacturedDate: ''
        });
    };

    const handleShowUpdateModal = () => setShowUpdateModal(true);
    const handleCloseUpdateModal = () => setShowUpdateModal(false);

    const handleShowDeleteModal = () => setShowDeleteModal(true);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewSupplier({ ...newSupplier, [id]: value });
    };

    const addSupplierConfirmed = () => {
        setSuppliers([...suppliers, newSupplier]);
        handleCloseAddModal();
    };

    const updateSupplierConfirmed = () => {
        // Update supplier logic here
    };

    const deleteSupplierConfirmed = () => {
        // Delete supplier logic here
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
                                        + Add Inventory
                                    </button>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead className="text-white" style={{backgroundColor: "#C19A6B"}}>
                                <tr>
                                    <th scope="col" style={{width: "12%"}}>Item ID</th>
                                    <th scope="col" style={{width: "20%"}}>Item Name</th>
                                    <th scope="col" style={{width: "28%"}}>Qty</th>
                                    <th scope="col" style={{width: "14%"}}>Price</th>
                                    <th scope="col" style={{width: "14%"}}>Supplier</th>
                                    <th scope="col" style={{width: "12%"}}></th>
                                </tr>
                                </thead>
                                <tbody>
                                {suppliers.map((supplier, index) => (
                                    <tr key={index}>
                                        <td>{supplier.itemId}</td>
                                        <td>{supplier.itemName}</td>
                                        <td>{supplier.qty}</td>
                                        <td>{supplier.price}</td>
                                        <td>{supplier.supplier}</td>
                                        <td>
                                            {/* Add Update and Delete button handlers here */}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Add Supplier Modal */}
                        <div className={`modal fade bd-example-modal-lg ${showAddModal ? "show d-block" : ""}`}
                             tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title fs-5" id="staticBackdropLabel">Add Inventory Item</h4>
                                        <button type="button" className="btn-close" onClick={handleCloseAddModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="itemId" className="form-label">Item ID</label>
                                            <input type="text" className="form-control" id="itemId" value={newSupplier.itemId} onChange={handleInputChange}/>
                                            <small className="text-danger" id="warningAddEmployer1" style={{display: 'none'}}>
                                                Please Enter Item ID
                                            </small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="itemName" className="form-label">Item Name</label>
                                            <input type="text" className="form-control" id="itemName" value={newSupplier.itemName} onChange={handleInputChange}/>
                                            <small className="text-danger" id="warningAddEmployer2" style={{display: 'none'}}>
                                                Please Enter Item Name
                                            </small>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="qty" className="form-label">Qty</label>
                                                    <input type="text" className="form-control" id="qty" value={newSupplier.qty} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer3" style={{display: 'none'}}>
                                                        Please Enter Quantity
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="price" className="form-label">Price</label>
                                                    <input type="number" className="form-control" id="price" value={newSupplier.price} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer4" style={{display: 'none'}}>
                                                        Please Enter Price
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="manufacturedDate" className="form-label">Manufactured Date</label>
                                                    <input type="date" className="form-control" id="manufacturedDate" value={newSupplier.manufacturedDate} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer6" style={{display: 'none'}}>
                                                        Please Enter Manufactured Date
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="supplier" className="form-label">Supplier</label>
                                                    <input type="text" className="form-control" id="supplier" value={newSupplier.supplier} onChange={handleInputChange}/>
                                                    <small className="text-danger" id="warningAddEmployer7" style={{display: 'none'}}>
                                                        Please Enter Supplier
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" onClick={handleCloseAddModal}>Cancel</button>
                                        <button type="button" className="btn btn-success" onClick={addSupplierConfirmed}>Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Update Supplier Modal */}
                        <div className={`modal fade bd-example-modal-lg ${showUpdateModal ? "show d-block" : ""}`}
                             tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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
                                        <button type="button" className="btn btn-success" onClick={updateSupplierConfirmed}>Update Supplier</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Delete Supplier Modal */}
                        <div className={`modal fade ${showDeleteModal ? "show d-block" : ""}`} tabIndex="-1"
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
                                        <button type="button" className="btn btn-danger" onClick={deleteSupplierConfirmed}>Yes, Delete</button>
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

export default InventoryManagement;
