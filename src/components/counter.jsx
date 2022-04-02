import React, {useState} from "react";

const Counter = (props) => {
    const value = props.value;

    const formatValue = () => {
        return value === 0? "empty" : value;
    }

    const getBageClasses = () => {
        let classes = "badge m-2 p-2 ";
        classes += value===0 ? "bg-warning text-dark" : "bg-primary";
        return classes;
    }

    return (
    <div>
        <span className = "badge m-2 p-2 text-dark text-start" style={{width: "180px"}} > {props.name} </span>
        <span className={getBageClasses()} style={{width: "70px"}}> {formatValue()} </span>
        <button
            className="btn btn-primary m-2"
            onClick={props.onIncrement}
        >
            +
        </button>
        <button
            className="btn btn-primary m-2"
            onClick={props.onDecrement}
        >
            -
        </button>
        <button className="btn btn-danger m-2 p-2" onClick={props.onDelete}>Delete</button>
    </div>
    )
}

export default Counter;
