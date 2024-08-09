import { validateEmailInput } from "./validateEmailInput";
import { JSDOM } from "jsdom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { vitest } from "vitest";

describe("Email input", () => {
  let dom: JSDOM;
  let form: HTMLFormElement;
  let emailInput: HTMLInputElement;
  let submitButton: HTMLButtonElement;

  beforeEach(() => {
    // Setup a new DOM before each test
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
      <body>
        <section>
          <div>
            <h2>
              Get notified when we launch
            </h2>
            <form id="signup-form">
              <div>
                <label for="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" />
                <p id="email-error" aria-live="polite"></p>
              </div>
              <button type="submit">
                Get notified
              </button>
            </form>
          </div>
        </section>
      </body>
      </html>
    `);

    global.document = dom.window.document;
    global.window = dom.window as any;

    form = dom.window.document.querySelector("#signup-form") as HTMLFormElement;
    emailInput = dom.window.document.querySelector(
      "#email"
    ) as HTMLInputElement;
    submitButton = form.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;

    form.addEventListener("submit", event => {
      console.log("submit event triggered");
      event.preventDefault();
      validateEmailInput();
    });
  });

  it("should trigger submit event listener", async () => {
    const submitSpy = vitest.fn();
    form.addEventListener("submit", submitSpy);
    console.log("Value: ", emailInput.value);
    await userEvent.type(emailInput, "invalid-email");
    console.log("Value: ", emailInput.value);
    console.log("Before clicking");
    await userEvent.click(submitButton);
    console.log("After clicking");
    expect(submitSpy).toHaveBeenCalled();
  });

  it("should show an empty error message for valid email", async () => {
    await userEvent.type(emailInput, "valid@example.com");
    await userEvent.click(submitButton);

    const emailError = form.querySelector("#email-error");
    expect(emailError).toBeInTheDocument();
    expect(emailError).toHaveTextContent("");
  });

  it("shows an error message for invalid email", async () => {
    // Mocking an invalid email input
    await userEvent.type(emailInput, "invalid-email");

    console.log("Email Input Value after typing: ", emailInput.value);
    // Submit the form
    console.log("clicking (invalid)");
    await userEvent.click(submitButton);
    // console.log("Directly calling validateEmailInput");
    // validateEmailInput();

    // Assert that the error message is shown
    const emailError = form.querySelector(
      "#email-error"
    ) as HTMLParagraphElement;
    expect(emailError).toBeInTheDocument();
    expect(emailError).toHaveTextContent("Please enter a valid email address");
  });

  it("shows an error message for empty email", async () => {
    // Submit the form with an empty email
    console.log("Clicking (empty)");
    await userEvent.click(submitButton);

    // Assert that the error message is shown
    const emailError = form.querySelector(
      "#email-error"
    ) as HTMLParagraphElement;
    expect(emailError).toBeInTheDocument();
    expect(emailError).toHaveTextContent("Email is required");
  });

  afterEach(() => {
    // Cleanup after each test
    dom.window.close();
  });
});
