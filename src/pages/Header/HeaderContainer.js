
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readApi } from "../../api/testApi";
import HeaderComponent from "./HeaderComponent";

function HeaderContainer() {

    const { test } = useSelector(state => state.testComment);
    const dispatch = useDispatch();


    useEffect(() => {
        readApi(dispatch)
    }, [dispatch]);


    return (
        <HeaderComponent test={test} />

    );
}

export default HeaderContainer;