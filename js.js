const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showText = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = "Mocne hasło";
		p.style.color = "green";
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
	) {
		p.textContent = "Średnie hasło";
		p.style.color = "yellow";
	} else {
		p.textContent = "Słabe hasło";
		p.style.color = "red";
	}
};

const blankPassword = () => {
	if (pass.value !== "") {
		showText();
	} else {
		p.textContent = "Wypełnij to pole...";
		p.style.color = "";
	}
};

pass.addEventListener("keyup", blankPassword);
