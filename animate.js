const buttons = document.querySelectorAll(".buttons > button");
let submit = document.querySelector("#submit");
let container = document.querySelector(".content-box");
const thanks = document.querySelector('.thank-you');
const para = document.querySelector('#text');
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");

/**This loop makes it possible for each button to individually show background when pressed**/
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    buttons[i].classList.add("change");
    for (j = 0; j < buttons.length; j++) {
			if (j !== i) {
				buttons[j].classList.remove("change");
      }
		}
  });
}

first.addEventListener('click', () => {
	para.innerHTML = `You selected ${'1'} out of 5`;
});
second.addEventListener('click', () => {
	para.innerHTML = `You selected ${'2'} out of 5`;
});
third.addEventListener('click', () => {
	para.innerHTML = `You selected ${'3'} out of 5`;
});
fourth.addEventListener('click', () => {
	para.innerHTML = `You selected ${'4'} out of 5`;
});
fifth.addEventListener('click', () => {
	para.innerHTML = `You selected ${'5'} out of 5`;
});

submit.addEventListener("click", () => {
	submit.classList.toggle("clicked");
	container.style.display = "none";
	thanks.style.display = "flex";
});
