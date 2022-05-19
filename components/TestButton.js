import { forwardRef } from "react";

const TestButton = ({ onClick, href, text }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {text}
    </a>
  );
};

export default forwardRef(TestButton);
