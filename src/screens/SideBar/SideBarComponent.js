import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './SideBarStyle.module.scss'
import DeleteIcon from '@material-ui/icons/Delete';


function SideBarComponent() {

    return (
        <div className={styles.sidebar}>
            <div className={styles.frame}>
                <h1><DeleteIcon className="logo" />  <NavLink to="/">FLOROX</NavLink></h1>
                <p>MANAGEMENT</p>
            </div>
            <ul>
                <li ><NavLink exact to="/" activeClassName={styles.selected}><DeleteIcon className={styles.icons} />Map View</NavLink></li>
                <li><NavLink to="/list" activeClassName={styles.selected}><DeleteIcon className={styles.icons} />List View</NavLink></li>
                <li><NavLink to="/bulk" activeClassName={styles.selected}><DeleteIcon className={styles.icons} />Bulk Add</NavLink></li>
                <li><NavLink to="/test" activeClassName={styles.selected}><DeleteIcon className={styles.icons} />Test</NavLink></li>
            </ul>
            <div className="frame">
                <p>SETTINGS</p>
            </div>
            <ul >
                <li><NavLink to="/a" activeClassName={styles.selected}><DeleteIcon className={styles.icons} />Data Format</NavLink></li>
                <li><NavLink to="/b" activeClassName={styles.selected}><DeleteIcon className={styles.icons} />Export data</NavLink></li>
                <li><NavLink to="/c" activeClassName={styles.selected}><DeleteIcon className={styles.icons} />User management</NavLink></li>
            </ul>
            <ul >
                <li><NavLink to="/d" activeClassName={styles.selected}><DeleteIcon className={styles.icons} />Support</NavLink></li>
                <li><NavLink to="/e" activeClassName={styles.selected}><DeleteIcon className={styles.icons} />Screen tour</NavLink></li>
            </ul>
        </div>


    )
}



export default SideBarComponent