import clsx from "clsx";
import style from "./Input.module.scss";
import { forwardRef, InputHTMLAttributes, useId } from "react";
import getClassString from "../../utils/getClassString";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className = "", icon, label, ...props }, ref) => {
    const id = useId();

    return (
      <div
        className={clsx(
          style.input,
          getClassString(className, style),
          icon && style["input--with-icon"]
        )}
      >
        {label && (
          <label className={style["input__label"]} htmlFor={id}>
            {label}
          </label>
        )}
        <div className={style["input__input-wr"]}>
          <input
            id={id}
            {...props}
            type={type}
            ref={ref}
            className={style["input__input"]}
          />
          {icon && <img className={style["input__icon"]} src={icon} alt="" />}
        </div>
      </div>
    );
  }
);

export default Input;
