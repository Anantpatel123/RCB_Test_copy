import React from "react";
import Alert from "./components/Alert";

const App = () => (
    <div>
        <Alert awesome ="anant" type="danger">Invalid user id or password</Alert>
        <Alert awesome ="anant" >NOOOOOOOOO</Alert>
        <Alert awesome ="anant" type="danger">YESSSSSSSSSSS</Alert>
    </div>
);

export default App;
