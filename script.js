const buttons = document.querySelectorAll(".nav-buttons button");
const panelsContainer = document.querySelector(".panels");
const panels = document.querySelectorAll(".panel");
const placeholder = document.getElementById("placeholder");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentVisibility = getComputedStyle(panelsContainer).visibility;
    if (currentVisibility === "hidden") {
      panelsContainer.style.visibility = "visible";
    }

    const panelNum = button.getAttribute("data-panel");

    if (placeholder) placeholder.style.display = "none";

    panels.forEach((panel) => panel.classList.remove("active"));

    const panelToShow = document.getElementById(`panel${panelNum}`);
    if (panelToShow) {
      panelToShow.classList.add("active");
    } else {
      console.error(`No panel with id panel${panelNum} found!`);
    }
  });
});
