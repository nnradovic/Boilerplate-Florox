import React from 'react';
import Header from '../Header';
import RouterComponent from '../../Route'


function MainComponent() {
    return (
        <div className="main h-v100-main" >
            <Header />
            <RouterComponent />
        </div>
    )
}

export default MainComponent