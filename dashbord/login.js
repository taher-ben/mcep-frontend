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
    // take the value from the forms to change the page 
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === '1' && localStorage.getItem('1') === 'jop-form.html') {
            window.location.href = "jop-form.html";
            return;
        } else if (localStorage.key(i) === '2' && localStorage.getItem('2') === 'trouble.html') {
            window.location.href = "trouble.html";
            return;
        }else if (localStorage.key(i) === '3' && localStorage.getItem('3') === 'dashbord.html') {
            window.location.href = "dashbord.html";
            return;
        }
    }
    // the defult page if the page open for the first time 
    window.location.href = "dashbord.html";
}

function handleLoginError(error) {
    Swal.fire("فشل تسجيل الدخول");
}