import * as React from "react";

import styles from "./index.module.css";

interface Props {
  name: string;
}

const Index: React.FC<Props> = ({ name }) => {
  return <div className={styles.Index}>{name}</div>;
};

export default Index;
