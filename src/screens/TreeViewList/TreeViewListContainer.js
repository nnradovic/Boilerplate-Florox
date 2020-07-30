import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readApi } from "../../api/testApi";
import TreeViewListComponent from "./TreeViewListComponent";

function TreeViewListContainer() {

    const { test } = useSelector(state => state.testComment);
    const dispatch = useDispatch();


    useEffect(() => {
        readApi(dispatch)
    }, [dispatch]);


    return (
        <TreeViewListComponent test={test} />

    );
}

export default TreeViewListContainer;