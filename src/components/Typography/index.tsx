import { merriweather } from "@/font/body";
import { FC, ReactNode } from "react";
import clx from "classnames";
import clasess from "./trypography.module.sass";
import React from "react";

export const Typography: FC<
  { children: ReactNode; className?: string } & React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, className, ...props }) => {
  return (
    <p className={clx(merriweather.className, clasess.root, className)} {...props}>
      {children}
    </p>
  );
};
