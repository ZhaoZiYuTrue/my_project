import React, { Component } from "react";
import styles from "../css/style.css";

class CartoonSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  changeValue = (e) => {
    this.setState({
      value: Math.round(e),
    });

    document.addEventListener("input", (event) => {
      const value = Number(e) / 100;
      let obj = document.documentElement.style;
      obj.setProperty("--thumb-rotate", `${value * 720}deg`);
    });
  };

  render() {
    return (
      <div className={styles.body}>
        <input
          id="slider_btn"
          type="range"
          value={this.state.value}
          className={styles.input}
          onChange={(e) => this.changeValue(e.target.value)}
        />
        <label id="slider_bar" className={styles.label}>
          {this.state.value}
        </label>
      </div>
    );
  }
}

export default CartoonSideBar;
