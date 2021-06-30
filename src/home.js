import './style.css';
import Icon from './images/krabby.png';

const parentDiv = document.createElement("div");

const header = document.createElement("header");
header.textContent = "Sea Famous Krabby Patties";
parentDiv.appendChild(header);
const miscPara = document.createElement("p");
miscPara.textContent = "Simply the best";
const miscPara2 = document.createElement("p");
miscPara2.textContent = "Since 1999";
parentDiv.appendChild(miscPara);

const img = new Image();
img.src = Icon;
img.classList.add("krabby-img");
parentDiv.appendChild(img);

parentDiv.appendChild(miscPara2);


const getHomeDiv = () => parentDiv;

export { getHomeDiv };