document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("Password").value;

    if (!email || !password) {
        Swal.fire("الرجاء إدخال بريد إلكتروني وكلمة مرور صحيحين.");
        return;
    }
    loginUser(email, password);
});

function loginUser(email, password) {
    axios.post("https://api.showmore.ly/login", { email, password })
        .then(response => handleLoginSuccess(response))
        .catch(error => handleLoginError(error));
}

function handleLoginSuccess(response) {
    const authToken = response.data.token;
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("authToken", authToken);

    // Simplify page redirection logic
    const pages = ['jop-form.html', 'trouble.html', 'dashbord.html'];
    for (let i = 1; i <= pages.length; i++) {
        if (localStorage.getItem(i.toString()) === pages[i - 1]) {
            window.location.href = pages[i - 1];
            return;
        }
    }
    // Default page if no match found
    window.location.href = "dashbord.html";
}

function handleLoginError(error) {
    console.log(error);
    Swal.fire("فشل تسجيل الدخول");
}