const makeContact = (dom) => {
	// Make Header
	const header = document.createElement("header");
	const h1 = document.createElement("h1");
	h1.innerText = "Ali Baba";
	const nav = document.createElement("nav");
	const button1 = document.createElement("button");
	button1.innerText = "Home";
	button1.id = "home";
	const button2 = document.createElement("button");
	button2.innerText = "Menu";
	button2.id = "menu";
	const button3 = document.createElement("button");
	button3.classList.add("pageopen");
	button3.innerText = "Contact";
	button3.id = "contact";

	//Make Main
    const main = document.createElement("main");
	const about = document.createElement("div");
	about.classList.add("about");

	const form = document.createElement('form');
	const nameLabel = document.createElement('label')
	nameLabel.setAttribute('for', 'name');
	nameLabel.innerText = "Name";
	const nameInput = document.createElement('input');
	nameInput.id = "name";
	nameInput.setAttribute('type', 'text');
	nameInput.setAttribute('autocomplete', 'off');
	const messageLabel = document.createElement('label');
	messageLabel.setAttribute('for', 'message');
	messageLabel.innerText = "Message";
	const messageInput = document.createElement('input');
	messageInput.id = "message";
	messageInput.setAttribute('type', 'text');
	messageInput.setAttribute('autocomplete', 'off');
	const formButton = document.createElement('button');
	formButton.innerText = "Submit";

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		about.innerHTML = "";
		const thankyou = document.createElement('h2');
		thankyou.innerText = "Thank you!"
		about.appendChild(thankyou);
		const lukeimg = document.createElement('img');
		lukeimg.setAttribute('src', '../src/luke2.jpg');
		lukeimg.setAttribute('alt', 'Thank you photo')
		lukeimg.style.width = "350px";
		lukeimg.style.marginTop = "60px";
		lukeimg.style.borderRadius = "0";
		about.appendChild(lukeimg);
	});

	// Append Elements
	nav.appendChild(button1);
	nav.appendChild(button2);
	nav.appendChild(button3);
	header.appendChild(h1);
	header.appendChild(nav);


	main.appendChild(about);
	form.appendChild(nameLabel);
	form.appendChild(nameInput);
	form.appendChild(messageLabel);
	form.appendChild(messageInput);
	form.appendChild(formButton);
	about.appendChild(form);

	dom.appendChild(header);
	dom.appendChild(main);
};

export default makeContact;
