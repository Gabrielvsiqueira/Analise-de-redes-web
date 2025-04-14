import '../index.css';
import { Link } from 'react-router-dom';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  to?: string; // Se quiser usar navegação por Link
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

function ButtonHomePage({ text, onClick, to, type = 'button', className = '' }: ButtonProps) {
  const button = (
    <button onClick={onClick} type={type} className={`button ${className}`}>
      {text}
    </button>
  );

  return (
    <div className="buttonHome">
      {to ? <Link to={to}>{button}</Link> : button}
    </div>
  );
}

export default ButtonHomePage;
