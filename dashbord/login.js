document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("Password").value;
    axios.post("https://api.showmore.ly/login", { email, password })
        .then(response => {
            const authToken = response.data.token;
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("authToken", authToken);
            window.location.href = "dashbord.html";
        })
        .catch(error => {
            console.error("فشل تسجيل الدخول", error);
        });
});