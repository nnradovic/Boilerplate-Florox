import React, { Fragment } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Search.module.scss'
import Button from '../../components/Button/Button';
import MenuIcon from '@material-ui/icons/Menu';


//**  ShowBtn ask is search have button, isFilter,isAdd... which sort of icon have button are have lef or right icon,
//**  ShowMenu ask is search have menu link with text and which sort of icon you have */

function Search({ showBtn, isFilter, isAdd, btnText, showMenu, text, isMapIcon, isListIcon }) {

    return (
        <Fragment>
            <SearchIcon className={styles.searchIcon} />
            {showBtn &&
                <Button
                    isFilter={isFilter}
                    isAdd={isAdd}
                    btnText={btnText}
                    isLeftIcon={true}
                />}
            {showMenu && <p>{text}{isMapIcon && <MenuIcon />}{isListIcon && <MenuIcon />}</p>}
            <input placeholder="Search" className={styles.search} />
        </Fragment>
    )
}


export default Search