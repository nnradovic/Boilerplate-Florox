import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readApi } from "../../api/testApi";
import PipeMapComponent from "./PipeMapComponent";

function PipeMapContainer() {

    const { test } = useSelector(state => state.testComment);
    const dispatch = useDispatch();


    useEffect(() => {
        readApi(dispatch)
    }, [dispatch]);


    return (
        <PipeMapComponent test={test} />

    );
}

export default PipeMapContainer;