import "./index.css";
import { validateEmailInput } from "./utils/validateEmailInput";

const formEl = document.querySelector("form") as HTMLFormElement;

formEl.addEventListener("submit", event => {
  event.preventDefault();
  validateEmailInput();
});

// observe each benefits list item
const benefitsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // remove any existing class containing "translate"
        Array.from(entry.target.classList).forEach(className => {
          if (className.includes("translate")) {
            entry.target.classList.remove(className);
          }
        });
        entry.target.classList.remove("opacity-0");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.35,
  }
);

const benefitsList = document.querySelector("ul") as HTMLUListElement;
const benefitsListItems = benefitsList.querySelectorAll("li");
benefitsListItems.forEach(item => {
  benefitsObserver.observe(item);
});

// observe the pricing section
const priceObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-move-gradient");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

const price = document.querySelector("#pricing .price") as HTMLSpanElement;
priceObserver.observe(price);

// observe the form button
const formButtonObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-wiggle");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

const formButton = document.querySelector("form button") as HTMLButtonElement;
formButtonObserver.observe(formButton);
