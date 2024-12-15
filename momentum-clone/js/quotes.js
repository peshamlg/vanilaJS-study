import { QUOTES } from "./config.js";

const quote = document.querySelector("#quote-text");
const author = document.querySelector("#quote-author");

const todaysQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;
