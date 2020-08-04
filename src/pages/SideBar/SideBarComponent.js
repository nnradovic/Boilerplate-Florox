import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faFilter, faUserCircle, faMapPin, faListUl, faFolderPlus, faNetworkWired, faFileExport, faUserCog, faSearch, faCaretRight, faCaretDown, faExpand } from "@fortawesome/free-solid-svg-icons"
import NavItem from '../../components/molecules/navItem'
library.add(faHome, faFilter, faUserCircle, faMapPin, faListUl, faFolderPlus, faNetworkWired, faFileExport, faUserCog, faSearch, faCaretRight, faCaretDown, faExpand)


function SideBarComponent() {
    return (
        <div className="sidebar sidebar-wrapper h-v100-main">
            <Link to="/" className="flex-grow-0 flex-shrink-0">
                <div className="pt-2 pr-3 pb-2 pl-3 h-row align-items-center d-flex">
                    <FontAwesomeIcon
                        icon="user-circle"
                        className="mr-2 active-text fa-lg text-primary"
                    />
                    <span className="active-text">
                        <b>Ruben van Gaalen</b>
                    </span>
                    <FontAwesomeIcon
                        icon="caret-down"
                        className="ml-2 active-text active-icon"
                    />
                </div>
            </Link>
            <div className="flex-grow overflow-scroll">
                <nav className="list-group list-group-flush">
                    <ul className="d-flex flex-column nav">
                        <li className="nav-title pl-3 nav-repository-header py-1 mt-4">
                            Management
              </li>
                        <NavItem navName="Map weergave" navIcon="map-pin" link="/" />
                        <NavItem navName="Lijst weergave" navIcon="list-ul" link="/list" />
                        <NavItem navName="Bulk toevoegen" navIcon="folder-plus" />
                    </ul>

                    <ul className="d-flex flex-column nav">
                        <li className="nav-title pl-3 nav-repository-header py-1 mt-4">
                            Settings
              </li>
                        <NavItem navName="Data Format" navIcon="network-wired" />
                        <NavItem navName="Export data" navIcon="file-export" />
                        <NavItem navName="Gebruikersbeheer" navIcon="user-cog" />
                    </ul>
                </nav>
                <div className="list-group list-group-flush mt-auto">
                    <nav className="list-group list-group-flush border-0 border-shadow-top muted-bg">
                        <ul className="d-flex flex-column nav">
                            <NavItem navName="Footer button" navIcon="plus" />
                        </ul>
                    </nav>
                </div>
            </div>
        </div>


    )
}



export default SideBarComponent