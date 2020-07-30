import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readApi } from "../../api/testApi";
import PipeInputTabComponent from "./PipeInputTabComponent";

function PipeInputTabContainer() {

    const { test } = useSelector(state => state.testComment);
    const dispatch = useDispatch();


    useEffect(() => {
        readApi(dispatch)
    }, [dispatch]);


    return (
        <PipeInputTabComponent test={test} />

    );
}

export default PipeInputTabContainer;