import { forwardRef } from "react";

const Textarea = forwardRef(function Textarea(props, ref) {
  return <textarea ref={ref} {...props} />;
});

export default Textarea;