"use strict";

const body = document.body;
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");
const active = document.querySelector(".active");
const menuBorder = document.querySelector(".menu__border");
const bgColor = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];

menuItems.forEach((item, i) => {
  console.log(i)
  item.addEventListener("click", function (e) {
    const btn = e.target.closest(".menu__item");
    if (!btn) return;
    menuItems.forEach((item, i) => {
      item.classList.remove("active");
      item.dataset.active = false;
    });
    
    menuBorder.style.transform = `translateX(${50 * i}%)`;
    body.style.backgroundColor = bgColor[i];
    btn.classList.add("active");
    btn.dataset.active = true;
  });
});




























////////////////
const findNumber = function (number, addedNumber) {
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];
  const arr4 = [];
  for (let i = 0; i <= number; i++) {
    arr1.push(i);
  }

  const loopArrays = arr1.map((num) => {
    const convertToNumber = String(num);
    const result = convertToNumber.split("");
    arr2.push(result);

    const results = result.map((el) => +el).reduce((x, y) => x + y);

    return results;
  });

  

  for (let i = 0; i < loopArrays.length; i++) {
    if (loopArrays[i] === addedNumber) {
      const result = arr2[i].reduce((x, y) => x + y);
      arr3.push(result);
    }
  }
  

  const result = arr3
    .map((x) => {
      const num = x.padStart(3, 0);
      return num;
    })
    .filter((x) => x[0] < x[1] && x[0] < x[2] && x[1] < x[2]);

  

  console.log(result);
};

// findNumber(200, 9);
// console.log(result1);

//////////////////////////////

//  console.log(finResult)

//  result.unshift('7')
//  console.log(result)
// for(let i = 0;i<arr.length;i++){
//   for(let j = 0;j<arr[i].length;j++){

//   }
// }

// const str= '5465';
// for(let i = 0;i<str.length;i++){
//  if(str[i] > str[i+1]){
//    console.log(true)
//  }else console.log(false)
// }
