import { findUser } from "./modules/searchUser.js";

const searchButton = document.getElementById("search-button");
const saveButton = document.getElementById("save-button");

searchButton.addEventListener("click", () => {
  const usernameField = document.getElementById("search-field");
  const username = usernameField.value;
  findUser(username);
});
