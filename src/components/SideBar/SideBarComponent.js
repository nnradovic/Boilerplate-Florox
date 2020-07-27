import React from 'react';
import { Link } from "react-router-dom";
import './SideBarStyle.scss'
import DeleteIcon from '@material-ui/icons/Delete';


function SideBarComponent() {

    return (
        <div className="sidebar">
            <h1><DeleteIcon className="logo" />  <Link to="/">FLOROX</Link></h1>
            <p>MANAGEMENT</p>
            <ul>
                <li><Link to="/"><DeleteIcon className="icons" />Map View</Link></li>
                <li><Link to="/list"><DeleteIcon className="icons" />List View</Link></li>
                <li><Link to="/"><DeleteIcon className="icons" />Bulk Add</Link></li>
                <li><Link to="/test"><DeleteIcon className="icons" />Test</Link></li>
            </ul>
            <p>SETTINGS</p>
            <ul>
                <li><Link to="/"><DeleteIcon className="icons" />Data Format</Link></li>
                <li><Link to="/"><DeleteIcon className="icons" />Export data</Link></li>
                <li><Link to="/"><DeleteIcon className="icons" />User management</Link></li>
            </ul>
            <ul className="stick-bottom">
                <li><Link to="/"><DeleteIcon className="icons" />Support</Link></li>
                <li><Link to="/"><DeleteIcon className="icons" />Screen tour</Link></li>
            </ul>
        </div>


    )
}



export default SideBarComponent