import { forwardRef } from "react";

const Select = forwardRef(function Select(props, ref) {
  return <select ref={ref} {...props} />;
});

export default Select;