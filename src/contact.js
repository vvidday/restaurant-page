import './style.css';
import { callListener } from './listeners';

const parentDiv = document.createElement("div");

const container = document.createElement("div");
const textDiv = document.createElement("div");
textDiv.id = "contact-text";
textDiv.textContent = "Feel free to contact us! We are open 24/7.";
container.appendChild(textDiv);
const callButton = document.createElement("button");
callButton.id = "call-button";
callButton.textContent = "Call the Krusty Krab";
callButton.addEventListener("click", callListener);
container.appendChild(callButton);
const jokeText = document.createElement("div");
jokeText.id = "joke-text";
jokeText.textContent = "It seems that Patrick is no longer keen on picking up your calls."
jokeText.classList.add("invisible");
container.appendChild(jokeText);



parentDiv.appendChild(container);


const getContactDiv = () => parentDiv;

export { getContactDiv };