import "./index.css";
import { validateEmailInput } from "./utils/validateEmailInput";

const formEl = document.querySelector("form") as HTMLFormElement;

formEl.addEventListener("submit", event => {
  event.preventDefault();
  validateEmailInput();
});
