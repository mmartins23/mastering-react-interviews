const ButtonClickExample = () => {
  // Event handler function for button click
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('Button clicked!', event);
  };

  return (
    <div>
      <h2>Button Click Example</h2>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default ButtonClickExample;
