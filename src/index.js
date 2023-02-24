import makeHomepage from "./home.js";
import makeMenu from "./menu.js";
import makeContact from "./contact.js";

const dom = document.getElementById("content");

makeHomepage(dom);

document.body.addEventListener("click", (event) => {
	const clickedButton = event.target;
	if (clickedButton.id === "home") {
		dom.innerHTML = "";
		console.log("Home tab clicked");
		makeHomepage(dom);
	} else if (clickedButton.id === "menu") {
		dom.innerHTML = "";
		console.log("Menu tab clicked");
		makeMenu(dom);
	} else if (clickedButton.id === "contact") {
		dom.innerHTML = "";
		makeContact(dom);
	}
});
