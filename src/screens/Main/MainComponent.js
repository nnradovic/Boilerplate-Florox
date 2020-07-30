import React from 'react';
import Header from '../Header';
import RouterComponent from '../../Route'
import styles from './MainStyle.module.scss'
function MainComponent() {
    return (
        <div className={styles.main} >
            <Header />
            <RouterComponent />
        </div>
    )
}

export default MainComponent