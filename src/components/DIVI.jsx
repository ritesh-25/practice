import React, { useState, useEffect } from "react";

const DIVI = () => {
    const [string, setString] = useState("");

    // Use useEffect to perform an action whenever 'string' changes
    useEffect(() => {
        console.log("The string has been updated:", string);
        // You can add additional actions here, like API calls or validations
    }, [string]); // Dependency array ensures the effect runs only when 'string' changes

    return (
        <>
            <div style={{ height: "200px", width: "200px", backgroundColor: "red" }}>
                <p>Typed text: {string}</p>
            </div>
            <input
                type="text"
                placeholder="Type something here..."
                value={string}
                onChange={(e) => setString(e.target.value)}
                style={{ marginTop: "10px", padding: "5px", fontSize: "16px" }}
            />
        </>
    );
};

export default DIVI;
