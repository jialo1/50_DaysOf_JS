"use strict";

const open = document.getElementById("open");

const close = document.getElementById("close");

let container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));