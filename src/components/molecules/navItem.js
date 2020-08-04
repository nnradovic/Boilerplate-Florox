import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavItem({ navName, navIcon, link }) {
  return (
    <li className="nav-item">
      <Link to={link} className="nav-link">
        <div className="d-flex">
          <div className="d-flex w-icon mr-2">
            <FontAwesomeIcon icon={navIcon} className="muted-icon m-auto" />
          </div>
          <div className="muted-text">{navName}</div>
        </div>
      </Link>
    </li>
  );
}
