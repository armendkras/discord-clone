import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './SideDrawer.css';
import Backdrop from './Backdrop/Backdrop';

function SideDrawer() {
    return (
        <div className="SideDrawer">
            <div className="SidebarD">
                <Sidebar/>
            </div>
            <Backdrop/>
        </div>
        
    )
}

export default SideDrawer
