function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Quote",
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
