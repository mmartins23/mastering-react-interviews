const PreventDefault = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <br />
            <input type="text" />
            <br />
            <button>Send</button>
        </form>
    )
}

export default PreventDefault;