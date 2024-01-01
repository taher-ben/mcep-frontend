document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    function logout() {
        localStorage.removeItem("isLoggedIn");
    }

    function clearLocalStorage() {
        localStorage.clear();
    }

    let dashbord = document.getElementById("dashbord");
    let jop_form = document.getElementById("jop-form");
    let trouble = document.getElementById("trouble");

    dashbord.addEventListener("click", function () {
        window.location.href = "dashbord.html";
    });

    jop_form.addEventListener("click", function () {
        window.location.href = "jop-form.html";
    });

    trouble.addEventListener("click", function () {
        window.location.href = "trouble.html";
    });

    // window.addEventListener('afterunload', function () {
    //     logout();
    //     clearLocalStorage();
    // });

    if (!isLoggedIn) {
        window.location.href = "login.html";
    }

    const logoutIcon = document.querySelector(".admin_name");
    logoutIcon.addEventListener("click", function () {
        logout();
        clearLocalStorage();
        window.location.href = "login.html";
    });
});
