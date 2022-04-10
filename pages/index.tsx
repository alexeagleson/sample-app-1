import type { NextPage } from "next";
import { Button } from "tsdx-sample-component-library";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>This is application number 1</h2>

      <p>
        It has a dependency on <code>tsdx-sample-component-library</code>
      </p>

      <Button>Component Library Button</Button>
    </div>
  );
};

export default Home;
