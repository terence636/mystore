import { getCartItems } from "./localStorage.js";

export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split("/");
  return {
    resource: request[1],
    id: request[2],
    verb: request[3],
  };
};

export const reRender = async (screen) => {
  document.getElementById("main-container").innerHTML = await screen.render();
  await screen.after_render();
};

export const showLoading = () => {
  document.getElementById("loading-overlay").classList.add("active");
};

export const hideLoading = () => {
  document.getElementById("loading-overlay").classList.remove("active");
};

export const showMessage = (message, callback) => {
  document.getElementById("message-overlay").innerHTML = `
  <div>
    <div id="message-overlay-content">${message}</div>
    <button id="message-overlay-close-button">OK</button>
  </div>
  `;
  document.getElementById("message-overlay").classList.add("active");
  document
    .getElementById("message-overlay-close-button")
    .addEventListener("click", () => {
      document.getElementById("message-overlay").classList.remove("active");
      if (callback) {
        callback();
      }
    });
};


export const redirectUser = () => {
  console.log("CartLength",getCartItems().length);
  if (getCartItems().length !== 0) {
    document.location.hash = "/shipping";
  } else {
    document.location.hash = "/";
  }
  
};

export const printDate = (t) => {
  // 2021-11-16T04:57:17.118+00:00
  const date = t.slice(8, 10);
  const month = t.slice(5, 7);
  const year = t.slice(0, 4);
  return `${date}/${month}/${year}`;
};

export const printTime = (t) => {
  const temp = parseInt(t.slice(11, 14), 10) + 8;
  const hour = `${temp >= 24 ? temp - 24 : temp}`;
  const minute = t.slice(14, 16);
  return `${hour}:${minute}`;
};