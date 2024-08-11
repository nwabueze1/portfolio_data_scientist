import { merriweather } from "@/font/body";
import { FC, ReactNode } from "react";
import clx from "classnames";

export const Typography: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <p className={clx(merriweather.className, className)}>{children}</p>;
};
