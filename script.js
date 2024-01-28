const formbuttons = document.getElementsByClassName("rating");
const rating = document.getElementById("selected-rating");
rating.innerText = 0;
const submitbutton = document.getElementById("submit-button");
const container1 = document.getElementsByClassName("container-1")[0];
const container2 = document.getElementsByClassName("container-2")[0];

for (const button of formbuttons) {
	button.addEventListener("click", () => {
		for (const buttons2 of formbuttons) {
			if (buttons2.id !== button.id) {
				buttons2.style.backgroundColor = "hsl(214, 20%, 22%)"; // orange
			} else {
				buttons2.style.backgroundColor = "hsla(217, 12%, 63%, 0.5)"; // gray
				buttons2.style.color = "hsl(0, 0%, 100%)"; // white
				rating.innerText = buttons2.id;
			}
		}
	});
}

submitbutton.addEventListener("click", () => {
	container1.style.display = "none";
	container2.style.display = "block";
})