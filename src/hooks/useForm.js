import { useState } from "react";

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleValueChange];
};

export default useForm;
