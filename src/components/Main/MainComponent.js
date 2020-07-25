import React from 'react';
import Header from '../Header/HeaderComponent';
import RouterComponent from '../../Route'
function MainComponent() {


    return (
        <div style={{ backgroundColor: "blue", height: 500 }}>
            <Header />
            Main
            <RouterComponent />
        </div>

    )
}

export default MainComponent