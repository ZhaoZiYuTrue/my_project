import React, { Component } from "react";
import { connect } from "dva";
import styles from "./capsule.less";

class CapsulePage extends Component {
  state = {};

  svg = () => {
    return (
      <svg
        width="626"
        height="512"
        viewBox="0 0 626 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M64 166Q115 115 180 89 244 63 313 63 382 63 447 89 511 115 562 166L528 200Q484 156 429 134 373 111 313 111 253 111 197 134 141 156 98 200L64 166ZM132 234Q169 197 216 178 263 159 313 159 363 159 410 178 457 197 494 234L460 268Q430 238 392 223 354 207 313 207 272 207 234 223 195 238 166 268L132 234ZM200 302Q223 279 252 267 281 255 313 255 345 255 374 267 403 279 426 302L392 335Q376 319 355 311 334 303 313 303 291 303 271 311 250 319 234 335L200 302ZM267 369Q287 351 313 351 339 351 358 369L313 415 267 369Z"
        ></path>
      </svg>
    );
  };

  render = () => {
    return (
      <div className={styles.body}>
        <div className={styles.grid}>
          <button className={styles.btn}>
            <span>正常</span>
          </button>
          <button className={styles.btn}>
            <span></span>
          </button>
          <div className={`${styles.btn} ${styles.icon}`} role="btn">
            {this.svg()}
          </div>

          <div className={styles.btn} role="btn">
            <span>不正常</span>
          </div>
          <div className={styles.btn} role="btn"></div>
          <div className={`${styles.btn} ${styles.icon}`} role="btn">
            {this.svg()}
          </div>

          <button className={styles.btn} disabled="disabled">
            <span>作废</span>
          </button>
          <button className={styles.btn} disabled="disabled"></button>
          <div
            className={`${styles.btn} ${styles.icon}`}
            role="btn"
            disabled="disabled"
          >
            {this.svg()}
          </div>
        </div>
      </div>
    );
  };
}

// IndexPage.propTypes = {};

export default connect()(CapsulePage);
