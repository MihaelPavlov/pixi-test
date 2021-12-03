import GameApplication from "./core/Application";
import * as PIXI from "pixi.js";

if (process.env.NODE_ENV === "development") {
  // required for pixi dev tools to work
  window.PIXI = PIXI;
}

document.addEventListener("DOMContentLoaded", new GameApplication());

// let app;

// window.onload = function () {
//   app = new PIXI.GameApplication({
//     width: 800,
//     height: 600,
//     backgroundColor: 0xaaaaaa,
//   });
//   document.body.appendChild(app.view);
// };
