import React, { useRef, useEffect } from 'react';

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null); // Declare useRef with type annotation for HTML input element

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input element when the component mounts
    }
  }, []);

  return (
    <div>
      <h2>Focus Input Example</h2>
      <input type="text"/>
      <br/>
      <br/>
      <input ref={inputRef} type="text" placeholder="Focus me on load" />
    </div>
  );
};

export default FocusInput;
