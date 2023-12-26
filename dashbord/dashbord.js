let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".fa-bars");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("fa-bars" ,"fa-bars-staggered");
}else
  sidebarBtn.classList.replace("fa-bars-staggered", "fa-bars");
}
