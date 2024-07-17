import React, {useState} from 'react';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const PaymentMgt = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const [payments, setPayments] = useState([
        {
            id: 1,
            itemName: "Bag",
            qty: "45",
            date: "12024-07-15",
            amount: "7500",
            status: "success",
        },
        {
            id: 2,
            itemName: "Umbrella",
            qty: "45",
            date: "12024-07-15",
            amount: "1500",
            status: "success",
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
                                    <h6 className="text-secondary my-2">Office Management > Payments Management</h6>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead className="text-white" style={{backgroundColor: "#C19A6B"}}>
                                <tr>
                                    <th scope="col" style={{width: "12%"}}>Sales ID</th>
                                    <th scope="col" style={{width: "20%"}}>Sales Items</th>
                                    <th scope="col" style={{width: "20%"}}>Qty</th>
                                    <th scope="col" style={{width: "28%"}}>Amount</th>
                                    <th scope="col" style={{width: "14%"}}>Date</th>
                                    <th scope="col" style={{width: "14%"}}>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {payments.map(payment => (
                                    <tr key={payment.id}>
                                        <td>{payment.id}</td>
                                        <td>{payment.itemName}</td>
                                        <td>{payment.qty}</td>
                                        <td>{payment.amount}</td>
                                        <td>{payment.date}</td>
                                        <td>{payment.status}</td>
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

export default PaymentMgt;