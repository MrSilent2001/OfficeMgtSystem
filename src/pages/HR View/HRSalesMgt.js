import React, {useState} from 'react';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const SalesMgt = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <main className='main-container'>
                <div className='main-title'>
                    <h1>HR Sales Mgt</h1>
                </div>
            </main>
        </div>

    );
};

export default SalesMgt;