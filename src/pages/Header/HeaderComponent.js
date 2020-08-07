import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCaretRight,
    faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";


function HeaderComponent() {




    return (
        <Navbar bg="primary" expand="lg" className="h-row sticky-top">
            <Nav className="mr-auto align-items-center">
                <div className="white">
                    <FontAwesomeIcon icon={faBars} className="mr-3 fa-lg" />
                    <span>
                        <FontAwesomeIcon icon={faHome} className="mr-2 white" />
              Home
            </span>
                    <span>
                        <FontAwesomeIcon icon={faCaretRight} className="mx-2 white fa-sm" />
              Link
            </span>
                </div>
            </Nav>
        </Navbar>
    )
}

export default HeaderComponent