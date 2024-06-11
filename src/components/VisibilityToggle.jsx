import { useState } from "react";

export const VisibilityToggle  = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Function to toggle the boolean state
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    }
    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? "Hide" : "Show"} Content
            </button>
            {isVisible && <p>This content is visible</p>}
        </div>
    )
}
