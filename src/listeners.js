import {getHomeDiv} from './home.js';
import { getMenuDiv } from './menu.js';
import { getContactDiv } from './contact.js';
import pat1 from './audio/pat1.mp3';
import pat2 from './audio/pat2.mp3';
import pat3 from './audio/pat3.mp3';

const mainDiv = document.getElementById("content");

function navSwitchListener(){
    let isContact = false;
    let toAppend = null;
    switch(this.textContent){
        case "Home":
            toAppend = getHomeDiv();
            break;
        case "Menu":
            toAppend = getMenuDiv();
            break;
        case "Contact":
            isContact = true;
            toAppend = getContactDiv();
            break;

    }
    if (toAppend != mainDiv.firstChild){
        if(mainDiv.firstChild) mainDiv.removeChild(mainDiv.firstChild);
        mainDiv.appendChild(toAppend);
        if(isContact) document.getElementById("joke-text").classList.add("invisible");
    }

}

const p1 = new Audio();
const p2 = new Audio();
const p3 = new Audio();
p1.src = pat1;
p2.src = pat2;
p3.src = pat3;
let callState = 0;

function callListener(){
    console.log(document.getElementById("call-button"));
    console.log(this);
    switch(callState){
        case 0:
            p1.play();
            callState = 1;
            this.classList.add("invisible");
            this.removeEventListener("click", callListener);
            setTimeout(()=> {this.classList.remove("invisible")}, 6000);
            this.addEventListener("click", callListener);
            break;
        case 1:
            p2.play();
            callState = 2;
            this.classList.add("invisible");
            setTimeout(()=> {this.classList.remove("invisible")}, 6000);
            break;
        case 2:
            p3.play();
            callState = 3;
            this.classList.add("invisible");
            setTimeout(()=> {this.classList.remove("invisible")}, 7000);
            break;
        case 3:
            document.getElementById("joke-text").classList.remove("invisible");
            break;
    }
}



export {callListener, navSwitchListener};