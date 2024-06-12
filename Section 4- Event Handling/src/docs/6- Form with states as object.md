# 1. How will you update the individual value of a state inside an object?

To update an individual value of a state inside an object, you can use the `setState` function with a callback that takes the previous state and returns a new state object with the updated value. In this example, we are updating `formData` which is an object with properties `name` and `email`.

Here’s the relevant part of the code with the `handleChange` function that updates the state:

```javascript
import { useState } from 'react';

const FormMultipleState = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted");
        console.log("Name:", formData.name);
        console.log("Email:", formData.email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <br />
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <br />
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormMultipleState;
```

### Explanation:
- The `handleChange` function is called every time the value of an input field changes.
- It destructures the `name` and `value` from the event target (`e.target`).
- It then updates the `formData` state using the `setFormData` function. The new state is created by spreading the previous state (`prevData`) and updating the property that matches the `name` attribute of the input field that triggered the event.