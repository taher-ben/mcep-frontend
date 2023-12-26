document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let captcharesponse = grecaptcha.getResponse();
    console.log(captcharesponse);
    if(captcharesponse.length <= 0){
        throw new Error('Erorr');
    }
    let data_contact = {
        full_name: document.getElementById('full_name').value,
        message: document.getElementById('message').value,
        email: document.getElementById('email').value
    };
    console.log(data_contact);
    let headers = {
        Accept:'application/json',
    };
    axios.post('https://api.showmore.ly/contact-us', data_contact , { headers: headers })
    .then(response => {
        Swal.fire({
            title: "تم الارسال",
            icon: "success"
        });
        let done = "تم";
        let editno = document.querySelector(".swal2-styled").innerText = done;
    })
    .catch(error => {
        Swal.fire({
            icon: "error",
            title: "خطا في الرسال",
        });
        let done = "تم";
        let editno = document.querySelector(".swal2-styled").innerText = done;
        console.error('خطأ:', error);
    });
});

