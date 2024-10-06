import clsx from "clsx";
import style from "./Button.module.scss";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, onClick }, ref) => (
    <button
      ref={ref}
      className={clsx(style.btn, style[className])}
      onClick={onClick}
    >
      {children}
    </button>
  )
);

export default Button;
