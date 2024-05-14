function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-intructions");

  let apiKey = "c7eebf8ff7o8d23ac85774cb72ct0a65";

  let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
  let context =
    "You love saying short funny quotes to make people happy and smile. Your mission is to generate a short, funny quote, with a maximum of thirty words, that will make someone smile. For example Light travels faster than sound. This is why some people appear bright until you hear them speak. Please only display the quote and nothing else. Make sure to follow the user instructions";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.innerHTML = `<div class ="blink">Generating quote for you ⌛</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
