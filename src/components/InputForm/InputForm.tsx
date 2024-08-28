import React from 'react';

import styles from './InputForm.module.css';
import { InputFormProps } from '../../types';

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
