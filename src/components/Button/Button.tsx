import styles from './Button.module.css';
import { IButtonProps } from '../../types';

const Button: React.FC<IButtonProps> = ({
  onClick,
  className,
  type,
  text,
  isDisabled = false,
}) => {
  return (
    <button
      className={`${styles.signInButton} ${className}`}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
