import React from 'react';

import styles from './InputForm.module.css';

interface InputFormProps {
  placeholder?: string;
  type: 'text' | 'submit';
  value: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  placeholder,
  type,
  value,
  className,
  onChange,
}) => {
  return (
    <input
      className={`${styles.input} ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputForm;
