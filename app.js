const menu = document.querySelector(".fa-bars");
const list = document.querySelectorAll(".naviation>li");

// 메뉴 토글 동작
menu.addEventListener("click", () => {
  list.forEach((item) => {
    item.style.display =
      item.style.display === "none" || item.style.display === ""
        ? "block"
        : "none";
  });
});

const mediaQuery = window.matchMedia("(max-width: 1023px)");
handleMediaQueryChange(mediaQuery);
mediaQuery.addListener(handleMediaQueryChange);

function handleMediaQueryChange(query) {
  if (query.matches) {
    list.forEach((item) => {
      item.style.display = "none";
    });
  } else {
    // 화면이 큰 경우의 동작
    // 추가로 원하는 동적인 로직을 여기에 추가

    // 예: 화면이 커질 때 추가로 어떤 동작을 수행하고 싶다면 여기에 추가
    list.forEach((item) => {
      item.style.display = "block"; // 큰 화면에서는 리스트를 보이도록 설정
    });
  }
}
