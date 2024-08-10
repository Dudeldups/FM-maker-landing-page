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
  let emailError: HTMLParagraphElement;

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
            <form id="signup-form" novalidate>
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
    emailError = form.querySelector("#email-error") as HTMLParagraphElement;

    form.addEventListener("submit", event => {
      event.preventDefault();
      validateEmailInput();
    });
  });

  it("should trigger submit event listener", async () => {
    const submitSpy = vitest.fn();
    form.addEventListener("submit", submitSpy);
    await userEvent.type(emailInput, "invalid-email");
    await userEvent.click(submitButton);
    expect(submitSpy).toHaveBeenCalled();
  });

  it("should show an empty error message for valid email", async () => {
    // Enter a valid email and submit the form
    await userEvent.type(emailInput, "valid@example.com");
    await userEvent.click(submitButton);

    expect(emailError).toBeInTheDocument();
    expect(emailError).toHaveTextContent("");
  });

  it("shows an error message for invalid email", async () => {
    // Enter an invalid email and submit the form
    await userEvent.type(emailInput, "invalid-email");
    await userEvent.click(submitButton);

    // Assert that the error message is shown
    expect(emailError).toBeInTheDocument();
    expect(emailError).toHaveTextContent("Please enter a valid email address");
  });

  it("shows an error message for empty email", async () => {
    // Submit the form with an empty email
    await userEvent.click(submitButton);

    // Assert that the error message is shown
    expect(emailError).toBeInTheDocument();
    expect(emailError).toHaveTextContent("Email is required");
  });

  it("shows an error message for whitespace email", async () => {
    // Submit the form with a whitespace email
    await userEvent.type(emailInput, "   ");
    await userEvent.click(submitButton);

    // Assert that the error message is shown
    expect(emailError).toBeInTheDocument();
    expect(emailError).toHaveTextContent("Email is required");
  });

  it("shows an error message if the email was valid but then became invalid", async () => {
    // Enter a valid email
    await userEvent.type(emailInput, "valid@email.com");
    // remove focus from input
    emailInput.blur();
    // Make the email invalid (remove top-level domain)
    await userEvent.type(emailInput, "{backspace}{backspace}{backspace}");
    // Submit the form by pressing enter
    await userEvent.type(emailInput, "{enter}");
    // Assert that the error message is shown
    expect(emailError).toHaveTextContent("Please enter a valid email address");
  });

  afterEach(() => {
    // Cleanup after each test
    dom.window.close();
  });
});
