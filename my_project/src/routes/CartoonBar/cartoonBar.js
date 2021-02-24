import React, { Component } from "react";
import { connect } from "dva";
import styles from "./cartoonBar.less";
import CartoonBar from "../../components/js-cartoon-side-bar/js/CartoonSideBar.js";

class CartoonBarPage extends Component {
  state = {};

  render = () => {
    return (
      <div className={styles.body}>
        <div className={styles.grid}>
          <CartoonBar />
        </div>
      </div>
    );
  };
}

// IndexPage.propTypes = {};

export default connect()(CartoonBarPage);
