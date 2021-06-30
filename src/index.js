import './style.css';
import {getHomeDiv} from './home.js';
import {Nav} from './nav.js';
import { navSwitchListener } from './listeners';

const mainDiv = document.getElementById("content");
document.body.insertBefore(Nav().getNav(), mainDiv);


const Swapper = () =>{
    const buttons = document.getElementById("button-div").children;
    buttons.forEach((b) => {
        b.addEventListener("click", navSwitchListener);
    })
}

// Set content to homepage
mainDiv.appendChild(getHomeDiv());

// Add listeners to nav buttons
const buttons = document.getElementById("button-div").children;
for(let b of buttons){
    b.addEventListener("click", navSwitchListener);
}

