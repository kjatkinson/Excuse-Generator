/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#theexcuse").innerHTML = generatorExcuse();

  console.log("Hello Rigo from the console!");
};
let generatorExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "jogger",
    "raccon",
    "dog",
    "merchant",
    "driver",
    "comedian",
    "pinecone"
  ];
  let action = [
    "took my",
    "threw my",
    "yelled at my",
    "kicked my",
    "stole my",
    "burned my",
    "bit my"
  ];
  let possetion = ["homework", "toe", "car", "shoe", "wallet"];
  let where = ["on the street", "in my house", "in the driveway"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let possetionIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    "" +
    subject[subjIndx] +
    " " +
    action[actionIndx] +
    " " +
    possetion[possetionIndx] +
    " " +
    where[whereIndx]
  );
};
