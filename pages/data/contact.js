document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let captcharesponse = grecaptcha.getResponse();
    console.log(captcharesponse);
    if(captcharesponse.length <= 0){
        throw new Error('Erorr');
    }
    let data_contact = {
        sender_fullname: document.getElementById('sender_fullname').value,
        message: document.getElementById('message').value,
        sender_email: document.getElementById('sender_email').value
    };
    console.log(data_contact);
    let headers = {
        Accept:'application/json',
    };
    axios.post('https://api.showmore.ly/contact-us', data_contact , { headers: headers })
    .then(response => {
        console.log('البيانات:', response.data_contact);
    })
    .catch(error => {
        console.error('خطأ:', error);
    });
});

