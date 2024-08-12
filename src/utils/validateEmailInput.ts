import { isValidEmail } from "./isValidEmail";

const validateEmailInput = () => {
  const emailInputEl = document.querySelector("#email") as HTMLInputElement;
  const email = emailInputEl.value.trim();

  const emailErrorEl = document.querySelector(
    "#email-error"
  ) as HTMLParagraphElement;

  if (isValidEmail(email)) {
    emailErrorEl.textContent = "Thanks for signing up!";
    emailInputEl.classList.remove("border-error");
    emailInputEl.classList.add("border-cyan");
    emailInputEl.setAttribute("aria-invalid", "false");
    emailErrorEl.classList.remove("text-error");
    emailErrorEl.classList.add("text-cyan");
  } else {
    if (email === "") {
      emailErrorEl.textContent = "Email is required";
    } else {
      emailErrorEl.textContent = "Please enter a valid email address";
    }
    emailInputEl.classList.remove("border-cyan");
    emailInputEl.classList.add("border-error");
    emailInputEl.setAttribute("aria-invalid", "true");
    emailErrorEl.classList.remove("text-cyan");
    emailErrorEl.classList.add("text-error");
  }
};

export { validateEmailInput };
