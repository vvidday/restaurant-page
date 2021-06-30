import './style.css';
// Building header (NavBar)

const Nav = () =>{
    //Nav
    const navElement = document.createElement("nav");
    //Icon
    const iconDiv = document.createElement("div");
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // myIcon.classList.add("icon");
    // iconDiv.appendChild(myIcon);
    iconDiv.textContent = "The Krusty Krab";
    iconDiv.classList.add("icon-div");
    //Buttons (Different tabs)
    const buttonDiv = document.createElement("div");
    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    buttonDiv.appendChild(homeButton);
    buttonDiv.appendChild(menuButton);
    buttonDiv.appendChild(contactButton);
    buttonDiv.id = "button-div";

    //Adding everything to nav
    navElement.appendChild(iconDiv);
    navElement.appendChild(buttonDiv);

    const getNav = () => navElement;

    return {
        getNav,
    };
}

export { Nav };