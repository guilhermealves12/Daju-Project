const menuToggle = document.getElementById("menu_toggle")
const navList = document.getElementById("nav_list")

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active")
})
