const mockData = [
	{ textcontent: "C", "data-key": "clear" },
	{ textcontent: "-", "data-key": "-" },
	{ textcontent: "/", "data-key": "/" },
	{ textcontent: "x", "data-key": "*" },
	{ textcontent: "7", "data-key": "7" },
	{ textcontent: "8", "data-key": "8" },
	{ textcontent: "9", "data-key": "9" },
	{ textcontent: "-", "data-key": "-" },
	{ textcontent: "4", "data-key": "4" },
	{ textcontent: "5", "data-key": "5" },
	{ textcontent: "6", "data-key": "6" },
	{ textcontent: "+", "data-key": "+" },
	{ textcontent: "1", "data-key": "1" },
	{ textcontent: "2", "data-key": "2" },
	{ textcontent: "3", "data-key": "3" },
	{ textcontent: "=", "data-key": "=", class: "equal tall" },
	{ textcontent: "0", "data-key": "0", class: "wide shift" },
	{ textcontent: ".", "data-key": ".", class: "shift" }
];

const container = document.createElement('div');
container.className = 'calculator';

const screen = document.createElement('div');
screen.className = 'screen';

const buttonList = document.createElement('ul');
buttonList.id = "buttons";
buttonList.className = 'buttons';

container.appendChild(screen);
container.appendChild(buttonList);

let liElements = mockData.map((obj) => {
	const li = document.createElement("li");
	const anchor = document.createElement("a");
	anchor.href = "#";
	anchor.textContent = obj.textcontent;

	anchor.setAttribute("data-key", obj["data-key"]);
	if (obj.class) {
		anchor.className = obj.class;
	}

	li.appendChild(anchor);
	buttonList.appendChild(li);
	return li;
});

document.body.appendChild(container);

// const estilo = screen.style.fontSize;
// const pantalla = screen.textContent;

let errorState = false;

liElements.forEach((li) => {
	li.addEventListener("click", function () {
		const calcBtn = li.querySelector("a").dataset.key;

		if (errorState && calcBtn !== 'clear') {
			return;
		}

		if (calcBtn == 'clear') {
			screen.textContent = "";
			screen.style.fontSize = "3em";
			errorState = false; 
		} else if (calcBtn == '=') {
			try {
				const result = eval(screen.textContent);
				console.log('Result:', result);
				screen.textContent = result;
			} catch (error) {
				screen.style.fontSize = "1em";
				errorState = true;
				if (error instanceof EvalError) {
					// console.log('EvalError:', error.message);
					screen.textContent = error.message;
				} else {
					// console.log('Error:', error.message);
					screen.textContent = error.message;
				}
			}
		} else {
			const expresionPantalla = calcBtn;
			screen.textContent += expresionPantalla;
		}
	})
});
