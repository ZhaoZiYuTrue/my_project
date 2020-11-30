import React, { Component } from "react";
import { connect } from "dva";
import styles from "./IndexPage.less"; // no-unused-vars
import CartoonBar from "../components/js-cartoon-side-bar/js/CartoonSideBar.js";

class IndexPage extends Component {
  state = {
    tempValue: "打开Console查看",
  };

  getUniqueValueFromArray = () => {
    let value = [...new Set([1, 2, 3, 3])];
    console.log(value);
  };

  removeForgeValueFromArray = () => {
    let myArray = [0, undefined, null, false];
    myArray
      .map((item) => {
        // ...
      })
      // Get rid of bad values
      .filter(Boolean);
    console.log(myArray);
  };

  // 创建一个纯“字典”对象
  createEmptyObject = () => {
    let dict = Object.create(null);
    console.log("pureObject", dict);
    let obj = {};
    console.log("normalObject", obj);
    // dict.__proto__ === "undefined"
    // No object properties exist until you add them
  };

  mergeObjects = () => {
    const person = { name: "赵自煜", gender: "男", job: "Killer" };
    const tools = { computer: "ThinkPad", job: "Programmer" };
    const attributes = {
      handsomeness: "Extreme",
      hair: "Black",
      eyes: "Brown",
    };
    // 若有相同的key，后续的key会覆盖前面的key，所以我注定不是killer
    const summary = { ...tools, ...person, ...attributes };
    console.log("person", person);
    console.log("tools", tools);
    console.log("attributes", attributes);
    console.log("summary", summary);
  };

  requireFunctionParameters = () => {
    const isRequired = () => {
      throw new Error("param is required");
    };

    const hello = (name = isRequired()) => {
      console.log(`hello ${name}`);
    };

    // This will throw an error because no name is provided
    // hello();

    // This will also throw an error
    // hello(undefined);

    // These are good!
    hello(null);
    hello("赵自煜");
  };

  destructuringAliases = () => {
    const obj = { x: 1 };

    // Grabs obj.x as { x }
    const { x } = obj;
    console.log(x);

    // Grabs obj.x as { otherName }
    const { x: otherName } = obj;
    console.log(otherName);
  };

  getQueryStringParameters = () => {
    // Assuming "?post=1234&action=edit"
    let paramsString = "?post=1234&action=edit";
    let urlParams = new URLSearchParams(paramsString);
    console.log(new URLSearchParams());

    console.log(urlParams.has("post")); // true
    console.log(urlParams.get("action")); // "edit"
    console.log(urlParams.getAll("action")); // ["edit"]
    console.log(urlParams.toString()); // "?post=1234&action=edit"
    console.log(urlParams.append("active", "1")); // "?post=1234&action=edit&active=1
  };

  render = () => {
    return (
      <div>
        <button onClick={() => this.getUniqueValueFromArray()}>
          获取数组的唯一值
        </button>
        <button onClick={() => this.removeForgeValueFromArray()}>
          数组和布尔（去除）
        </button>
        <button onClick={() => this.createEmptyObject()}>创建空对象</button>
        <button onClick={() => this.mergeObjects()}>合并物件</button>
        <button onClick={() => this.requireFunctionParameters()}>
          需要功能参数
        </button>
        <button onClick={() => this.destructuringAliases()}>破坏别名</button>
        <button onClick={() => this.getQueryStringParameters()}>
          获取查询字符串参数
        </button>
        <br />
        <br />
        <br />
        <div>{this.state.tempValue}</div>
        <CartoonBar />
      </div>
    );
  };
}

// IndexPage.propTypes = {};

export default connect()(IndexPage);
