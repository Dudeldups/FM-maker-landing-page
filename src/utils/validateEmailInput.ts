import { isValidEmail } from "./isValidEmail";

const validateEmailInput = () => {
  const emailEl = document.querySelector("#email") as HTMLInputElement;
  const email = emailEl.value.trim();
  console.log("Email string in validateEmailInput: ", email);

  const emailErrorEl = document.querySelector(
    "#email-error"
  ) as HTMLParagraphElement;

  if (email === "") {
    emailErrorEl.textContent = "Email is required";
  } else if (!isValidEmail(email)) {
    emailErrorEl.textContent = "Please enter a valid email address";
  } else {
    emailErrorEl.textContent = "";
  }
};

export { validateEmailInput };
