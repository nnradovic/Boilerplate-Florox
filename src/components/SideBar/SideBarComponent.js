
import React from 'react';
import { Link } from "react-router-dom";
function SideBarComponent() {


    return (
        <div style={{ backgroundColor: "red", height: 500 }}>
            SideBar
            <Link to="/">Map</Link>
            <Link to="/list">List</Link>

        </div>

    )
}

export default SideBarComponent