import { merriweather } from "@/font/body";
import { FC, ReactNode } from "react";
import clx from "classnames";
import clasess from "./trypography.module.sass";

export const Typography: FC<{ children: ReactNode; className?: string }> = ({
                                                                              children,
                                                                              className,
                                                                            }) => {
  return <p className={clx(merriweather.className, clasess.root, className)}>{children}</p>;
};
