const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');

buttons.forEach((button) => {
	button.onclick = (event) => {
		buttonHandler(event.target);
	};
});

const buttonHandler = (target) => {
	const action = target.attributes['data-action']?.value;
	if (action === 'control') {
		controlButtonHandler(target);
	} else {
		setOutput(output.textContent + target.textContent);
	}
};

const controlButtonHandler = (target) => {
	const controlAction = target.textContent;
	switch (controlAction) {
		case 'DEL': {
			const currentValue = output.textContent;
			const lastChar = currentValue[currentValue.length - 1];
			const newValue = currentValue.replace(lastChar, '');
			setOutput(newValue);
			break;
		}
		case 'C': {
			setOutput('');
			break;
		}
		case '=': {
			setOutput(eval(output.textContent));
			break;
		}
	}
};

const setOutput = (newValue) => {
	output.textContent = newValue;
};
