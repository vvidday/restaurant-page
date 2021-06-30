import {getHomeDiv} from './home.js';
import { getMenuDiv } from './menu.js';

const mainDiv = document.getElementById("content");

function navSwitchListener(){
    let toAppend = null;
    switch(this.textContent){
        case "Home":
            toAppend = getHomeDiv();
            break;
        case "Menu":
            toAppend = getMenuDiv();
            break;
        case "Contact":
            break;

    }
    if (toAppend != mainDiv.firstChild){
        console.log("Not equal");
        if(mainDiv.firstChild) mainDiv.removeChild(mainDiv.firstChild);
        mainDiv.appendChild(toAppend);
    }
    else console.log("equal");
}

export {navSwitchListener};