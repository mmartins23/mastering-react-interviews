const MouseClickExample = () => {
  // Event handler function for mouse click
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Mouse clicked!', event);
  };

  return (
    <div>
      <h2>Mouse Click Example</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default MouseClickExample;
