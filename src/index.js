import './style.css';
import {getHomeDiv} from './home.js';
import {Nav} from './nav.js';
import { navSwitchListener } from './listeners';

const mainDiv = document.getElementById("content");

document.body.insertBefore(Nav().getNav(), mainDiv);
//mainDiv.appendChild(getHomeDiv());

const Swapper = () =>{
    const buttons = document.getElementById("button-div").children;
    console.log(buttons);
    buttons.forEach((b) => {
        b.addEventListener("click", navSwitchListener);
    })
}


mainDiv.appendChild(getHomeDiv());
const buttons = document.getElementById("button-div").children;
console.log(buttons);
for(let b of buttons){
    b.addEventListener("click", navSwitchListener);
}