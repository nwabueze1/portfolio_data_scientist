import styles from "./accordion.module.sass";
import { FC, useState } from "react";
import { AccordionPropsType } from "@/components/Accordion/type";
import { GoChevronDown } from "react-icons/go";
import clx from "classnames";

export const Accordion: FC<AccordionPropsType> = ({ title, children }) => {
  const [open, setOpen] = useState(false);


  return <div className={styles.root}>
    <header className={styles.header} onClick={() => setOpen(!open)}>
      <h3 className={styles.title}>{title}</h3>
      <GoChevronDown className={clx(styles.icon, open && styles.icon__open)} />
    </header>
    <div className={clx(styles.wrapper, open && styles.wrapperOpen)}>
      <div className={styles.inner}>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  </div>;
};