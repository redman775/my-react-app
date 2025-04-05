import React, { useState } from "react";
import './styles/App.css';

function App() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Stay Positive and Keep Moving Forward!</h1>
            <input
                type="number"
                placeholder="Type a number"
                onChange={handleChange}
                style={{ padding: "10px", fontSize: "16px" }}
            />
            <p style={{ marginTop: "20px", fontSize: "18px" }}>
                Result: {inputValue ? parseInt(inputValue) + 2 : ""}
            </p>
        </div>
    );
}

export default App;