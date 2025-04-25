import { useRef, useState, useEffect } from "react";
import { valueFormatation } from "../../utils/validation";

export default function Input({ 
  name, 
  label, 
  type, 
  maxLength, 
  error, 
  onValidate 
}) {
  const [labelClasses, setLabelClasses] = useState(
    "absolute left-0 top-0 text-blue-400 transition-all duration-200"
  );
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const inputRef = useRef();

  const handleInputFocus = () => {
    setLabelClasses(
      "absolute left-0 top-[-1rem] text-blue-600 text-sm transition-all duration-200"
    );
    setIsTouched(true);
  };

  const handleInputBlur = () => {
    if (!inputRef.current.value) {
      setLabelClasses(
        "absolute left-0 top-0 text-blue-400 transition-all duration-200"
      );
      setIsTouched(false);
    }
  };

  const handleChange = (e) => {
    const newValue = valueFormatation(name, e.target.value);
    setValue(newValue);
    if (isTouched) {
      onValidate(name, newValue);
    }
  };

  const getBorderColor = () => {
    if (!isTouched) return 'border-blue-300';
    if (error && value) return 'border-red-300';
    return 'border-blue-300';
  };

  const getLabelColor = () => {
    if (!isTouched) return 'text-blue-400';
    if (error && value) return 'text-red-500';
    return 'text-blue-600';
  };

  return (
    <div className="relative group">
      <input
        ref={inputRef}
        type={type}
        name={name}
        id={name}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={`w-full px-1 py-2 border-b-2 ${getBorderColor()} outline-none 
        focus:border-${error && value ? 'red' : 'blue'}-500 transition-all duration-200
        bg-transparent text-gray-800`}
      />
      <label 
        htmlFor={name} 
        className={`${labelClasses} ${
          value && "top-[-1.5rem] text-sm"
        } ${getLabelColor()}`}
      >
        {label}
      </label>
      {(error && isTouched && value) && (
        <p className="absolute left-0 top-[100%] text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
      <div className={`absolute bottom-0 left-0 w-full h-[2px] 
                    ${error && isTouched && value ? 'bg-red-500' : 'bg-blue-500'}
                    transform scale-x-0 transition-transform duration-200 
                    group-focus-within:scale-x-100`} />
    </div>
  );
}