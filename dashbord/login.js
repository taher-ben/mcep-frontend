document.addEventListener("DOMContentLoaded", function () {
    
    const isAuthenticated = localStorage.getItem("authenticated");

    
    if (!isAuthenticated) {
        window.location.href = "login.html";
    }
});

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('Password').value;

    axios.post('https://api.showmore.ly/login', {
        email: email,
        password: password
    })
    .then(response => {

        const token = response.data.token;


        localStorage.setItem("authenticated", "true");
        localStorage.setItem("token", token);


        window.location.href = "dashboard.html";
    })
    .catch(error => {

        console.error('Login failed:', error);
    });
}