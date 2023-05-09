import { useState } from "react";
import type { InvoiceFormProps } from "~/components/Invoice/Form";

export const useInput = (
  initialValue: string,
  name: string,
  setHandler: React.Dispatch<React.SetStateAction<InvoiceFormProps>>
) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setHandler((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return {
    value,
    onChange: handleChange,
    name,
  };
};

export default useInput;
