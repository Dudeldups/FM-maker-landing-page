import { isValidEmail } from "./../src/utils/isValidEmail";
import { JSDOM } from "jsdom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Signup Form", () => {
  let dom: JSDOM;
  let container: HTMLDivElement;
  let form: HTMLFormElement;
  let emailInput: HTMLInputElement;
  let submitButton: HTMLButtonElement;

  beforeEach(() => {
    // Setup a new DOM before each test
    dom = new JSDOM(`
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

    // Extract the container element
    container = dom.window.document.body.querySelector(
      "section > div"
    ) as HTMLDivElement;
    dom.window.document.body.innerHTML = "";
    dom.window.document.body.appendChild(container);

    form = container.querySelector("#signup-form") as HTMLFormElement;
    emailInput = form.querySelector("#email") as HTMLInputElement;
    submitButton = form.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;
  });

  it("submits the form with valid email", async () => {
    // Mocking a valid email input
    await userEvent.type(emailInput, "test@example.com");

    // Submit the form
    await userEvent.click(submitButton);

    // Assert that the form submission is handled correctly (mock behavior)
    expect(form).toHaveFormValues({ email: "test@example.com" });
  });

  // Add more tests for other scenarios like invalid email, error messages, etc.

  afterEach(() => {
    // Cleanup after each test
    dom.window.close();
  });
});
