import React from "react";

const Math = ({num1, operator, num2}) => {
    let value;
    switch(operator) {
        case "+":
            value = num1 + num2;
            break;
        case "-":
            value = num1 - num2;
            break;
        case "*":
            value = num1 * num2;
            break;
        case "/":
            value = num1 / num2;
            break;
        default:
            return <span>"I dont know"</span>
    }

    return <span style={{fontSize: value}}>{value}</span>
}

export default Math;