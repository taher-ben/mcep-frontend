document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    function logout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("authToken");
    }

    //start moing between pages 
    let jop_form = document.getElementById("jop-form");
    let trouble = document.getElementById("trouble");
    let dashbord = document.getElementById("dashbord");

    if (jop_form) {
        jop_form.addEventListener("click", function () {
            localStorage.setItem('1', 'jop-form.html');
            localStorage.removeItem('2');
            localStorage.removeItem('3');
        });
    }

    if (trouble) {
        trouble.addEventListener("click", function () {
            localStorage.setItem('2', 'trouble.html');
            localStorage.removeItem('1');
            localStorage.removeItem('3');
        });
    }
    if (dashbord) {
        dashbord.addEventListener("click", function () {
            localStorage.setItem('3', 'dashbord.html');
            localStorage.removeItem('1');
            localStorage.removeItem('2');
        });
    }
    //end moing between pages 

    window.addEventListener("beforeunload", function (event) {
        logout();
    });

    if (!isLoggedIn) {
        window.location.assign("login.html");
    }

    const logoutIcon = document.querySelector(".admin_name");
    if (logoutIcon) {
        logoutIcon.addEventListener("click", function () {
            logout();
            window.location.assign("login.html");
        });
    }
});