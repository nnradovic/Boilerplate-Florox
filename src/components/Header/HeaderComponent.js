import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './HeaderStyle.module.scss'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



function HeaderComponent() {

    const [isSearch, setIsSearch] = useState(false)

    const toggleSearch = () => {
        setIsSearch(!isSearch)
    }
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className={styles.header} >
                <div className={styles.iconCenter}>
                    <MenuIcon onClick={toggleSearch} className={styles.icon} />
                </div>
                <div className={styles.user}>
                    <img src={require("../../assets/img/user.jpg")} alt="username" />
                    <p>Rubben van Gaalen</p>
                    <ClickAwayListener
                        mouseEvent="onMouseDown"
                        touchEvent="onTouchStart"
                        onClickAway={handleClickAway}
                    >
                        <div className={styles.root}>
                            <ArrowDropDownIcon className={styles.icon} onClick={handleClick} />
                            {open ? (
                                <div className={styles.dropdown}>
                                    <p>Item 1</p>
                                    <p>Item 1</p>
                                    <p>Item 1</p>
                                    <p>Item 1</p>
                                </div>
                            ) : null}
                        </div>
                    </ClickAwayListener>

                </div>
            </div>
            {isSearch ? <div >
                <SearchIcon className={styles.searchIcon} />

                <input placeholder="Search" className={styles.search} />
            </div> : null}
        </div>
    )
}

export default HeaderComponent