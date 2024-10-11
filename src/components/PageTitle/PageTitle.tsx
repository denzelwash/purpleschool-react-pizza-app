import { HTMLAttributes, ReactNode } from "react";
import style from "./PageTitle.module.scss";
import clsx from "clsx";
import getClassString from "../../utils/getClassString";

interface PageTitleProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function PageTitle({
  children,
  className = "",
}: PageTitleProps) {
  return (
    <h1 className={clsx(style["page-title"], getClassString(className, style))}>
      {children}
    </h1>
  );
}
