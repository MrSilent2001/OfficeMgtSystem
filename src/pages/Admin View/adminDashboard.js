import React, {useState} from 'react';
import "../styleSheets/adminDashboard.css"
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Home from "../../components/home";

const AdminDashboard = () => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Home/>

        </div>
    );
};

export default AdminDashboard;