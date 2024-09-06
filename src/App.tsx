import { Component, ReactNode, useState } from "react";
import styles from "./styles.css";
import Header from "./header/src/App";
import Footer from './footer/src/App'

class App extends Component {
  render(): ReactNode {
    const click = () => {
      alert("Hola a todos");
    };
    return (
      <div className={styles.container}>
        <Header></Header>
        <button className={styles.button} onClick={click}>
          Fun year fact
        </button>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
