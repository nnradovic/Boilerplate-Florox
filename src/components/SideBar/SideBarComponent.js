import React from 'react';
import { NavLink } from "react-router-dom";
import './SideBarStyle.scss'
import DeleteIcon from '@material-ui/icons/Delete';


function SideBarComponent() {

    return (
        <div className="sidebar">
            <div className="frame">
                <h1><DeleteIcon className="logo" />  <NavLink to="/">FLOROX</NavLink></h1>
                <p>MANAGEMENT</p>
            </div>
            <ul>
                <li ><NavLink exact to="/" activeClassName="selected"><DeleteIcon className="icons" />Map View</NavLink></li>
                <li><NavLink to="/list" activeClassName="selected"><DeleteIcon className="icons" />List View</NavLink></li>
                <li><NavLink to="/bulk" activeClassName="selected"><DeleteIcon className="icons" />Bulk Add</NavLink></li>
                <li><NavLink to="/test" activeClassName="selected"><DeleteIcon className="icons" />Test</NavLink></li>
            </ul>
            <div className="frame">
                <p>SETTINGS</p>
            </div>
            <ul >
                <li><NavLink to="/a" activeClassName="selected"><DeleteIcon className="icons" />Data Format</NavLink></li>
                <li><NavLink to="/b" activeClassName="selected"><DeleteIcon className="icons" />Export data</NavLink></li>
                <li><NavLink to="/c" activeClassName="selected"><DeleteIcon className="icons" />User management</NavLink></li>
            </ul>
            <ul >
                <li><NavLink to="/d" activeClassName="selected"><DeleteIcon className="icons" />Support</NavLink></li>
                <li><NavLink to="/e" activeClassName="selected"><DeleteIcon className="icons" />Screen tour</NavLink></li>
            </ul>
        </div>


    )
}



export default SideBarComponent