import React from 'react';
import styles from './page.module.css';

export function Page({ children }: React.PropsWithChildren<{}>) {
  return <div className={styles.root}>{children}</div>;
}
