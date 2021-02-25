import React, { Component } from "react";
import { connect } from "dva";
import styles from "./IndexPage.less"; // no-unused-vars

class IndexPage extends Component {
  state = {
    tempValue: "打开Console查看",
  };

  getUniqueValueFromArray = () => {
    let array = [1, 2, 3, 3];
    console.log("old", array);
    let value = [...new Set(array)];
    console.log("new", value);
  };

  removeForgeValueFromArray = () => {
    let myArray = [0, undefined, null, false, NaN, "", 1];
    // Get rid of bad values
    let temp = myArray.filter(Boolean);
    console.log("before", myArray);
    console.log("after", temp);
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

  arrayToMap = () => {
    let array = [
      { name: "德莱厄斯", location: "TOP" },
      { name: "李青", location: "JUG" },
      { name: "亚索", location: "MID" },
      { name: "薇恩", location: "ADC" },
      { name: "布里茨", location: "SUP" },
    ];
    console.log("Array", array);
    let map = Array.from(array, ({ name }) => name);
    console.log("Map", map);
  };

  intersection = () => {
    let array = ["0", "1", "2", "3", "4"],
      _array = ["3", "4", "5", "6", "7"],
      newArray = [...new Set(array)].filter((item) => _array.includes(item));
    console.log("数组1", array);
    console.log("数组2", _array);
    console.log("交集", newArray);
  };

  randomHero = () => {
    let array = ["德莱厄斯", "李青", "亚索", "薇恩", "布里茨"],
      randomHero = array[Math.floor(Math.random() * array.length)];
    console.log("所有英雄", array);
    console.log("获得了", randomHero);
  };

  getSum = () => {
    let array = [1, 2, 3, 4],
      sum = array.reduce((x, y) => x + y);
    console.log("Array", array);
    console.log("sum", sum);
  };

  console = () => {
    const { 'log': log } = console;
    log("r u ok?");
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
        <button onClick={() => this.arrayToMap()}>Array → Map</button>
        <button onClick={() => this.intersection()}>获取两个数组的交集</button>
        <button onClick={() => this.randomHero()}>获取随机英雄</button>
        <button onClick={() => this.getSum()}>数组元素求和</button>
        <button onClick={() => this.console()}>console.log便利性写法</button>
        <br />
        <br />
        <br />
        <div>{this.state.tempValue}</div>
      </div>
    );
  };
}

// IndexPage.propTypes = {};

export default connect()(IndexPage);
