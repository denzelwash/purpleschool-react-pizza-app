import clsx from "clsx";
import style from "./Button.module.scss";
import { ButtonHTMLAttributes, forwardRef } from "react";
import getClassString from "../../utils/getClassString";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "small";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(style.btn, getClassString(className, style), {
        [style["btn--small"]]: size === "small",
      })}
      {...props}
    >
      {children}
    </button>
  )
);

export default Button;
