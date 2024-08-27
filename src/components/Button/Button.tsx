import styles from './Button.module.css';

interface ButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
  type: 'button' | 'submit';
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
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
