const makeMenu = (dom) => {
	// Make Header
	const header = document.createElement("header");
	const h1 = document.createElement("h1");
	h1.innerText = "Ali Baba";
	const nav = document.createElement("nav");
	const button1 = document.createElement("button");
	button1.innerText = "Home";
	button1.id = "home";
	const button2 = document.createElement("button");
	button2.classList.add("pageopen");
	button2.innerText = "Menu";
	button2.id = "menu";
	const button3 = document.createElement("button");
	button3.innerText = "Contact";
	button3.id = "contact";

	//Make Main
	const main = document.createElement("main");
	const menu = document.createElement("div");
	menu.classList.add("menu");
	const grid = document.createElement('grid');
    grid.classList.add('grid');
    const img1 = document.createElement('img');
    img1.setAttribute('src', '../src/food1.png');
    img1.classList.add('field');
    const img2 = document.createElement('img');
    img2.setAttribute('src', '../src/food2.png');
    img2.classList.add('field');
    const img3 = document.createElement('img');
    img3.setAttribute('src', '../src/food3.png');
    img3.classList.add('field');
    const img4 = document.createElement('img');
    img4.setAttribute('src', '../src/food4.png');
    img4.classList.add('field');
    const img5 = document.createElement('img');
    img5.setAttribute('src', '../src/food5.png');
    img5.classList.add('field');
    const img6 = document.createElement('img');
    img6.setAttribute('src', '../src/food6.png');
    img6.classList.add('field');


	// Append Elements
	nav.appendChild(button1);
	nav.appendChild(button2);
	nav.appendChild(button3);
	header.appendChild(h1);
	header.appendChild(nav);

	grid.appendChild(img1);
    grid.appendChild(img2);
    grid.appendChild(img3);
    grid.appendChild(img4);
    grid.appendChild(img5);
    grid.appendChild(img6);
    menu.appendChild(grid);
	main.appendChild(menu);

	dom.appendChild(header);
	dom.appendChild(main);
};

export default makeMenu;
