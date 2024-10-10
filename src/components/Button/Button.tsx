import clsx from "clsx";
import style from "./Button.module.scss";
import { ButtonHTMLAttributes, forwardRef } from "react";
import getClassString from "../../utils/getClassString";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "small";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, onClick, size = "default" }, ref) => (
    <button
      ref={ref}
      className={clsx(style.btn, getClassString(className, style), {
        [style["btn--small"]]: size === "small",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
);

export default Button;
