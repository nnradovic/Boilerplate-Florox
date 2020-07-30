import React, { Fragment } from 'react';
import styles from './ButtonStyle.module.scss'
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';


//**  ShowBtn ask is search have button, isFilter,isAdd... which sort of icon have button,
//**  IsLeft ask where is position of icon  before or after text */

function MyButton({ isFilter, isAdd, btnText, isLeftIcon }) {

    const Icons = () => {
        return (
            <Fragment>
                {isFilter && <MenuIcon />}{isAdd && <MenuIcon />}
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Button className={styles.myButton}>{isLeftIcon && Icons()}{btnText}{!isLeftIcon && Icons()}</Button>
        </Fragment>
    )
}


export default MyButton