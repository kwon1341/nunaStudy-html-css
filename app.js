const menu = document.querySelector(".fa-bars");
const list = document.querySelectorAll(".naviation>li");

menu.addEventListener("click", () => {
  list.forEach((item) => {
    item.style.display =
      item.style.display === "none" || item.style.display === ""
        ? "block"
        : "none";
  });
});
