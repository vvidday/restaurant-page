import './style.css';
import Krabby from './images/krabby.png';
import Spongebob from './images/spongebob.png';
import Patrick from './images/patrick.png';
import MrKrabs from './images/mrkrabs.png';

const parentDiv = document.createElement("div");

const menuGrid = document.createElement("div");
menuGrid.id = "menu-grid";

const menuItems = [];
for(let i = 0; i < 4; i++){
    let a = document.createElement("div");
    a.classList.add("wrapper-div");
    let b = document.createElement("div");
    b.classList.add("menu-item");
    let c = new Image();
    c.classList.add("menu-item-image");
    let d = document.createElement("div");
    d.classList.add("menu-item-title");
    let e = document.createElement("div");
    d.classList.add("menu-item-description");

    switch(i){
        case 0:
            c.src = Krabby;
            d.textContent = "Krabby Patty";
            e.textContent = "Served with fries.";
            break;
        case 1:
            c.src = MrKrabs;
            d.textContent = "Mr Krab's Kombo";
            e.textContent = "Tastiest combo from the owner himself!";
            break;
        case 2:
            c.src = Patrick;
            d.textContent = "Patrick's Paradise";
            e.textContent = "Positively perfect.";
            break;
        case 3:
            c.src = Spongebob;
            d.textContent = "Spongebob's Special";
            e.textContent = "Straight from the chef!";
            break;
    }
    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    a.appendChild(b);
    menuGrid.appendChild(a);
}

parentDiv.appendChild(menuGrid);

const getMenuDiv = () => parentDiv;

export { getMenuDiv };