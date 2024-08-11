import { FC, ReactNode } from "react";
import styles from "./container.module.sass";
import clx from "classnames";

export const Container: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={clx(styles.container, className)}>{children}</div>;
};
