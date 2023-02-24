const makeHomepage = (dom) => {

    // Make Header 
	const header = document.createElement("header");
	const h1 = document.createElement("h1");
	h1.innerText = "Ali Baba";
	const nav = document.createElement("nav");
	const button1 = document.createElement("button");
	button1.innerText = "Home";
    button1.id = "home";
    button1.classList.add("pageopen");
	const button2 = document.createElement("button");
	button2.innerText = "Menu";
    button2.id = "menu";
	const button3 = document.createElement("button");
	button3.innerText = "Contact";
    button3.id = "contact";

    //Make Main
	const main = document.createElement("main");
	const about = document.createElement("div");
	about.classList.add("about");
	const p1 = document.createElement("p");
    p1.innerText = "Best Kebab in Belfast"
	const p2 = document.createElement("p");
    p2.innerText = "Just look at this happy customer!"
	const img = document.createElement("img");
    img.setAttribute('src', '../src/luke.jpg')
    img.setAttribute('alt', 'Satisfied Customer')
	const p3 = document.createElement("p");
    p3.innerText = "- The Swanston Slobber"

	// Append Elements
	nav.appendChild(button1);
	nav.appendChild(button2);
	nav.appendChild(button3);
	header.appendChild(h1);
	header.appendChild(nav);

	about.appendChild(p1);
	about.appendChild(p2);
	about.appendChild(img);
	about.appendChild(p3);
	main.appendChild(about);

	dom.appendChild(header);
	dom.appendChild(main);
};

export default makeHomepage;
