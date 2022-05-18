import React from "react";

const TestButton = React.forwardRef(({ onClick, href, text }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {text}
    </a>
  );
});

TestButton.displayName = "TestButton";

export default TestButton;
