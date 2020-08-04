import React from "react";
import PipeInputTabComponent from "./PipeInputTabComponent";

function PipeInputTabContainer() {

    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];



    return (
        <PipeInputTabComponent options={options} />

    );
}

export default PipeInputTabContainer;