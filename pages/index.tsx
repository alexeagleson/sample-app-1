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

      <p>
        app-1 can be managed and worked on as a separate application and pulled into the core app when ready to release an update
      </p>

      <Button>Component Library Button</Button>
    </div>
  );
};

export default Home;
