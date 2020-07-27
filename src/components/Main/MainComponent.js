import React from 'react';
import Header from '../Header/HeaderComponent';
import RouterComponent from '../../Route'
import './MainStyle.scss'
function MainComponent() {
    return (
        <div className="main" >
            <Header />
            Main
            <RouterComponent />
        </div>
    )
}

export default MainComponent