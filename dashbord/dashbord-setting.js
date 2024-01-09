let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".fa-bars");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("fa-bars" ,"fa-bars-staggered");
}else
  sidebarBtn.classList.replace("fa-bars-staggered", "fa-bars");
}

window.onscroll = function () {
  scrollFunction();
};


function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
  ) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = -20;
}
