document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        window.location.href = "login.html";
    } else {
        localStorage.removeItem("isLoggedIn");
    }
});

    // document.addEventListener("DOMContentLoaded", function () {
    //     // قم بفحص حالة تسجيل الدخول
    //     const isLoggedIn = localStorage.getItem("isLoggedIn");

    //     if (!isLoggedIn) {
    //         // إذا لم يكن المستخدم قد قام بتسجيل الدخول، قم بتوجيهه إلى صفحة تسجيل الدخول
    //         localStorage.setItem("targetPage", window.location.href);
    //         window.location.href = "login.html";
    //     }
    // });

