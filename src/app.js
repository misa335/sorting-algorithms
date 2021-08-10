const Sort = require("./Sort.js");
require("./style.css");

const randomArray = [];
const length = 10;

//create ramdomArray
for (let i = 0; i < length; i++) {
  randomArray.push(parseInt(Math.random() * 50));
}

const sort = new Sort(randomArray);
console.log(sort);

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle(
  sort.returnValue("✨👀Visualizing Merge Sort👀✨")
);
document.getElementById("title").appendChild(title);

document.querySelector(".start").onclick = function () {
  // console.log(sort.array);
  const copy = sort.array.slice();
  console.log("original:", copy);
  const orgArray = document.querySelector("#original");
  console.log(orgArray);
  for (const item of copy) {
    const childArray = document.createElement("div");
    childArray.className = "child";
    const imgEl = document.createElement("img");
    imgEl.src = "../pocky.jpg";
    imgEl.style.width = "30px";
    imgEl.style.height = `${item * 10}px`;
    // childArray.innerHTML = item;
    childArray.append(imgEl);
    orgArray.append(childArray);
  }
};

document.querySelector(".answer").onclick = function () {
  // console.log(sort.sort());
  const copy = sort.sort().slice();
  console.log("result:", copy);
  const result = document.querySelector("#result");
  console.log(result);
  for (const item of copy) {
    const resultArray = document.createElement("div");
    resultArray.className = "result";
    const imgEl = document.createElement("img");
    imgEl.src = "../pocky.jpg";
    imgEl.style.width = "30px";
    imgEl.style.height = `${item * 10}px`;
    resultArray.append(imgEl);
    // resultArray.innerHTML = item;
    result.append(resultArray);
  }
};
