import React, {useState} from 'react'
import '../App.css';
import
{BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
import {MdLogout} from "react-icons/md";
import {Navigate} from "react-router-dom";

function Header({OpenSidebar}) {
    const [navigate, setNavigate] = useState(false);
    const handleClick = () =>{
        setNavigate(true);
        localStorage.clear();
    }

    if(navigate){
        return <Navigate to="/"/>
    }
    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar}/>
            </div>
            <div className='header-left'>
                {/*<BsSearch  className='icon'/>*/}
            </div>
            <div className='header-right'>
                {/*<BsFillBellFill className='icon'/>*/}
                {/*<BsFillEnvelopeFill className='icon'/>*/}
                {/*<BsPersonCircle className='icon'/>*/}

                <MdLogout className='icon' style={{width:'18px', height:'18px', cursor: 'pointer'}} onClick={handleClick}/>
            </div>
        </header>
    )
}

export default Header