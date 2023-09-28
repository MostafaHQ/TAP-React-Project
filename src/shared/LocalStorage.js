import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const sortedValue = localStorage.getItem(key) || initialValue;

  const [value, setValue] = useState(sortedValue);

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, updateValue];
};
