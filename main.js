const mockData = [
	{textcontent: "C", "data-key": "clear"},
	{textcontent: "-", "data-key": "-"},
	{textcontent: "/", "data-key": "/"},
	{textcontent: "x", "data-key": "x"},
	{textcontent: "7", "data-key": "7"},
	{textcontent: "8", "data-key": "8"},
	{textcontent: "9", "data-key": "9"},
	{textcontent: "-", "data-key": "-"},
	{textcontent: "4", "data-key": "4"},
	{textcontent: "5", "data-key": "5"},
	{textcontent: "6", "data-key": "6"},
	{textcontent: "+", "data-key": "+"},
	{textcontent: "1", "data-key": "1"},
	{textcontent: "2", "data-key": "2"},
	{textcontent: "3", "data-key": "3"},
	{textcontent: "=", "data-key": "=", class: "equal tall"},
	{textcontent: "0", "data-key": "0", class: "wide shift"},
	{textcontent: ".", "data-key": ".", class: "shift"}
];

// Crear el contenedor principal
const container = document.createElement('div');
container.className = 'calculator';

// Crear el contenedor principal
const screen = document.createElement('div');
screen.className = 'screen';

// Crear la lista de respuestas
const buttonList = document.createElement('ul');
buttonList.id = "buttons";
buttonList.className = 'buttons';

container.appendChild(screen);
container.appendChild(buttonList);


let liElements = mockData.map((boton) => {
	const li = document.createElement("li");

	const anchor = document.createElement("a");
	anchor.href = "#";
	anchor.textContent = boton.textcontent;

	anchor.setAttribute("data-key", boton["data-key"]);
	if (boton.class) {
		anchor.className = boton.class;
	}

	li.appendChild(anchor);
	buttonList.appendChild(li);
	return li;
});

document.body.appendChild(container);


liElements.forEach((li) => {
	li.addEventListener("click", function() {
		console.log("Works");
	})
});
