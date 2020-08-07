
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readApi } from "../../api/testApi";
import TestComponent from "./TestComponent";

function TestContainer() {

    const { test } = useSelector(state => state.testComment);
    const dispatch = useDispatch();


    useEffect(() => {
        readApi(dispatch)
    }, [dispatch]);


    return (
        <TestComponent test={test} />

    );
}

export default TestContainer;
