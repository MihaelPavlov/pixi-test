import GameApplication from "./core/Application.js";
// import * as PIXI from "pixi.js";

// if (process.env.NODE_ENV === "development") {
//   // required for pixi dev tools to work
//   window.PIXI = PIXI;
// }

document.addEventListener("DOMContentLoaded", new GameApplication());

// The application will create a canvas element for you that you
// can then insert into the DOM
