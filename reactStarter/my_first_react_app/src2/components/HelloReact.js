import React from "react";

const styles = {
    base: {
        color: "red",
        fontSize: "24px"
    }    
}

const HelloReact = () => {
    return (
        // <div>
            <p style={styles.base}>Hello World!<br/>
            Hello World 2nd time w/o div!</p>
        // </div>
    );
};

export default HelloReact;
