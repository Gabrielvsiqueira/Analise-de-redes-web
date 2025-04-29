import '../index.css';
import  Button from 'react-bootstrap/Button';

type CustomButtonProps = {
  label: string;
  onClick?: () => void;
  to?: string; 
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'Dark' | 'Link';
  size?: 'sm' | 'lg';
  disabled?: boolean;
};

function CustomButton({label, onClick, type = 'button', variant= 'primary', size= 'lg',}: CustomButtonProps) {
  return (
    <Button variant={variant} type={type} size={size} onClick={onClick}>{label}</Button>
  );
}

export default CustomButton;
