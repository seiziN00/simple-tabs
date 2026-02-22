const firstTab = document.getElementById("firstTab");
const secondTab = document.getElementById("secondTab");
const thirdTab = document.getElementById("thirdTab");
const fourthTab = document.getElementById("fourthTab");

firstTab.addEventListener("click", showFirstContent);
secondTab.addEventListener("click", showSecondContent);
thirdTab.addEventListener("click", showThirdContent);
fourthTab.addEventListener("click", showFourthContent);

showFirstContent();

function showFirstContent() {
	hideContent();
	let content = document.querySelector(".firstContent");
	content.style.display = "block";
}

function showSecondContent() {
	hideContent();
	let content = document.querySelector(".secondContent");
	content.style.display = "block";
}

function showThirdContent() {
	hideContent();
	let content = document.querySelector(".thirdContent");
	content.style.display = "block";
}

function showFourthContent() {
	hideContent();
	let content = document.querySelector(".fourthContent");
	content.style.display = "block";
}

function hideContent() {
	const container = document.querySelectorAll(".container > div");
	container.forEach(child => {
		child.style.display = "none";
	});
}
